/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let fdum = new ListNode(0),bdum = new ListNode(0);
  let [front,back,curr] = [fdum,bdum,head]
  while(curr) {
    if(curr.val < x) {
      front.next = curr 
      front = front.next
    } else {
      back.next = curr
      back = back.next
    }
    curr = curr.next
  }
  front.next = bdum.next;
  back.next = null;
  return fdum.next

};
// @lc code=end
