/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function (head) {
  const dummyNode = new ListNode(0, head);
  let cur = dummyNode;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let curVal = cur.next.val;
      while (cur.next && cur.next.val === curVal) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next;
    }
  }

  return dummyNode.next;
};
// @lc code=end
