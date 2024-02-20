/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const findCenter = (head) => {
    let slower = (faster = head)

    while (faster && faster?.next) {
      slower = slower.next
      faster = faster.next.next
    }

    if (faster) slower = slower.next
    return slower
  }

  const reverse = (head) => {
    let cur = head,
      prev = null

    while (cur) {
      const nxt = cur.next
      cur.next = prev
      prev = cur
      cur = nxt
    }

    return prev
  }

  let right = reverse(findCenter(head))
  let left = head

  while (right) {
    if (left.val !== right.val) return false

    left = left.next
    right = right.next
  }

  return true
}
// @lc code=end
