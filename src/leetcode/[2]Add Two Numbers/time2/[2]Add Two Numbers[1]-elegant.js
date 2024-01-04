/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode(0)
  let tail = dummyNode

  // 是否进位
  let carry = 0

  while (l1 || l2 || carry) {
    const [l1Val, l2Val] = [l1?.val || 0, l2?.val || 0]

    let sum = l1Val + l2Val + carry

    carry = 0

    if (sum >= 10) {
      carry = 1
      sum -= 10;
    }

    tail.next = new ListNode(sum)
    tail = tail.next
    l1 = l1?.next
    l2 = l2?.next
  }

  return dummyNode.next
}
// @lc code=end
