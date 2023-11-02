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
 let dummyNode = new ListNode(0)
 dummyNode.next = head
 let tail = dummyNode

 while(tail?.next && tail?.next?.next){
  let node1 = tail?.next 
  let node2 = tail?.next?.next
  tail.next = node2
  node1.next = node2.next
  node2.next = node1
  tail = node1
 }

 return dummyNode.next
}
// @lc code=end
