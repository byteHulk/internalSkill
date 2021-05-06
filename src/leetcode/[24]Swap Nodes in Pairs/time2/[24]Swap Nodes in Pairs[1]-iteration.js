/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  //1.cur = head nxt = head.next
  //2.cur.next = nxt.next
  //3.nxt.next = cur

  // let temp = new ListNode(0)
  // temp.next = head
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let temp = dummyHead

  while (temp.next !== null && temp.next.next !== null) {
    let node1 = temp.next
    let node2 = temp.next.next
    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  // return temp.next
  return dummyHead.next
}
// @lc code=end
