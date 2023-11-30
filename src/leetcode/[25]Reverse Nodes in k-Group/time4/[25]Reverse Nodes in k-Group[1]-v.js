/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
  const reverseLinkedLists = (head, tail) => {
    let pre = tail.next,
      cur = head

    while (pre !== tail) {
      const nxt = cur.next
      cur.next = pre
      pre = cur
      cur = nxt
    }

    return [tail, head]
  }

  let dummyNode = new ListNode(0)
  dummyNode.next = head
  let pre = dummyNode

  while (head) {
    let tail = pre
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) return dummyNode.next
    }

    const nxt = tail.next
    ;[head, tail] = reverseLinkedLists(head, tail)

    pre.next = head
    tail.next = nxt
    pre = tail
    head = tail.next
  }

  return dummyNode.next
}
// @lc code=end
