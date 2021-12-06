/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(!head || !head.next || !k) return head;
  let len = 1,cur = head;
  while(cur.next) {
    cur = cur.next;
    len++
  }
  let move = len - k %len;
  cur.next = head;
  while(move) {
    cur = cur.next;
    move --;
  }
  let ans = cur.next;
  cur.next = null;
  return ans
};
// @lc code=end
