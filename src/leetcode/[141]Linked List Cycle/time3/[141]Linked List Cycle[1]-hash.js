/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let map = new Map()
  let tail = head

  while (tail) {
    if (map.has(tail)) return true
    map.set(tail)
    tail = tail.next
  }

  return false
}
// @lc code=end
