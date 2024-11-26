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
    let dummyNode = new ListNode()
    let cur = head
    let prev = dummyNode
    dummyNode.next = head

    while(cur && cur.next){
        const nxt = cur.next.next

        prev.next = cur.next
        cur.next = nxt
        prev.next.next = cur

        prev = cur

        cur = nxt
    }

    return dummyNode.next
};
// @lc code=end
