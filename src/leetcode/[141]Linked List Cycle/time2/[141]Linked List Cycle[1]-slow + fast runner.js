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
  let slow = head
  let fast = head

  while (fast && fast.next && fast.next.next) {
    ;[slow, fast] = [slow.next, fast.next.next]
    if (fast == slow) return true
  }

  return false
}
// @lc code=end
