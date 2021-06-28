/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (fast == slow) {
      slow = head
      while (fast !== slow) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}
// @lc code=end
