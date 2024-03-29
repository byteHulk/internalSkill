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
  let fast = head
  let slow = head

  while (fast?.next && fast?.next?.next) {
    ;[fast, slow] = [fast?.next?.next, slow?.next]
    if (fast === slow) return true
  }
  return false

}
// @lc code=end
