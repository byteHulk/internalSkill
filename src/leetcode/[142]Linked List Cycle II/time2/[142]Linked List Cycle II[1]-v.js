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
  const map = new WeakMap()

  while (head) {
    if (map.has(head)) return head
    else map.set(head, head)
    head = head.next
  }

  return null
}
// @lc code=end
