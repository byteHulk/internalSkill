/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function (head) {
  if (head === null) return head

  let dummNode = new ListNode(0)
  dummNode.next = head
  let lastSorted = head
  let cur = head.next

  while (cur) {
    if (cur.val >= lastSorted.val) {
      lastSorted = lastSorted.next
    } else {
      let prev = dummNode
      while (cur.val >= prev.next.val) {
        prev = prev.next
      }
      lastSorted.next = cur.next
      cur.next = prev.next
      prev.next = cur
    }
    cur = lastSorted.next
  }
  return dummNode.next
}
// @lc code=end
