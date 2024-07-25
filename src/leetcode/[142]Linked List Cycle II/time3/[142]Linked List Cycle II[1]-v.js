/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let map = new Map()

    let cur = head

    while(cur){
        if(map.has(cur)) return cur
        else map.set(cur,cur)
        cur = cur.next
    }

    return null
    
};
// @lc code=end
