/*
 * @Author: HuangBoWen
 * @Date: 2022-03-29 14:18:08
 * @LastEditors: HuangBoWen
 * @LastEditTime: 2022-03-29 14:58:15
 * @Description:
 */
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
  // 1. 2.reverseList 3.
  const reverseLinkedLists = (head, tail) => {
    let [cur,pre] = [head, tail.next]

    while(pre !== tail){
      const nxt = cur.next
      cur.next = pre
      pre = cur
      cur = nxt
    }
    return [tail,head]
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
    ;[head, tail] = reverseLinkedLists(head, tail)

    pre.next = head
    tail.next = nxt
    pre = tail
    head = tail.next
  }
  return dummyNode.next
}
// @lc code=end
