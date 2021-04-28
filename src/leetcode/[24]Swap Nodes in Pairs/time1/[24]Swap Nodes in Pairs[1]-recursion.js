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
var swapPairs = function(head) {
    if(head === null || head.next === null)
        return head

     let firstNode = head
     let secondNode = head.next

    firstNode.next  = swapPairs(secondNode.next)
    secondNode.next = firstNode
    return secondNode
};
// @lc code=end