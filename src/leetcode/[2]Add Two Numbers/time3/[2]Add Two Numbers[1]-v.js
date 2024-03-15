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

    const count = Number(l1Val) + Number(l2Val) + carry
    carry = count.toString().length > 1 ? 1 : 0
    let baseValue =
      count.toString().length > 1 ? count.toString()[1] : count.toString()[0]

    tail.next = new ListNode(baseValue)
    tail = tail.next
    l1 = l1?.next
    l2 = l2?.next
  }

  return dummyNode.next
}
// @lc code=end
