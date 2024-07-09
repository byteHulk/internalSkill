/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const set = new Set()

  let tmp = headA

  while (tmp) {
    set.add(tmp)
    tmp = tmp.next
  }

  tmp = headB

  while (tmp) {
    if (set.has(tmp)) return tmp
    tmp = tmp.next
  }

  return null
}
// @lc code=end
