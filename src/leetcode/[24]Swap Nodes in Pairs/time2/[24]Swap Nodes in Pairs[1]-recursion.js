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
var swapPairs = function (head) {
  //1.cur = head nxt = head.next
  //2.cur.next = nxt.next
  //3.nxt.next = cur
  if(head === null || head.next === null) return head

  let cur = head
  let nxt = head.next

  cur.next = swapPairs(nxt.next)
  nxt.next = cur

  return nxt
}
// @lc code=end
