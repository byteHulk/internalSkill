/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let cur = head

  while(cur){
    const nxt = cur.next
    cur.next = prev
    prev = cur
    cur = nxt
  }

  return prev
}
// @lc code=end
