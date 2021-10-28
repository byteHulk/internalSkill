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
  //1.reverse 2.compare

  const findCenter = (head) => {
    let slower = head,
      faster = head
    while (faster && faster.next != null) {
      slower = slower.next
      faster = faster.next.next
    }
    // 如果 faster 不等于 null，说明是奇数个，slower 再移动一格
    if (faster != null) {
      slower = slower.next
    }
    return slower
  }

  const reverse = (head) => {
    let prev = null,
      cur = head,
      nxt = head
    while (cur != null) {
      nxt = cur.next
      cur.next = prev
      prev = cur
      cur = nxt
    }
    return prev
  }
  
  let right = reverse(findCenter(head))
  let left = head

  while (right != null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
// @lc code=end
