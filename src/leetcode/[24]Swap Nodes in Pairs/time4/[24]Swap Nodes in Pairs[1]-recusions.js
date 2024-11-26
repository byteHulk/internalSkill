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
    if(!head || !head.next) return head

    let node1 = head
    let node2 = head.next

    node1.next = swapPairs(node2.next)
    node2.next = node1
    return node2
};
// @lc code=end
