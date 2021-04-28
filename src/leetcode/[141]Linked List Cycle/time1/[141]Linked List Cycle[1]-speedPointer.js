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
  if (head == null || head.next == null) {
    return false
  }

  let slow = head
  let fast = head.next

  while (slow) {
    if (slow === fast) {
      return true
    }
    slow = slow?.next || null
    fast = fast?.next?.next || null
  }
  return false
}
// @lc code=end
