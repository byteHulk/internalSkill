/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const reverseLinkedList = (head, tail) => {
    let pre = tail.next
    let cur = head

    if (prev !== tail) {
      const nxt = cur.next
      cur.next = pre
      pre = cur
      cur = nxt
    }
    return [tail, head]
  }

  const dummyNode = new ListNode(0)
  dummyNode.next = head
  let pre = dummyNode

  while (head) {
    let tail = pre
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) return dummyNode.next
    }
    const nxt = tail.next
    ;[head, tail] = reverseLinkedList(head, tail)
    
    pre.next = head
    tail.next = nxt
    pre = tail
    head = tail.next
  }

  return dummyNode.next
}
// @lc code=end
