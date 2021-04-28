/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
const swapPairs = (head) => {
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy

  while (head && head.next) {
    const next = head.next 
    head.next = next.next
    next.next = head
    prev.next = next

    prev = head 
    head = head.next 
  }
  return dummy.next
}
// @lc code=end
