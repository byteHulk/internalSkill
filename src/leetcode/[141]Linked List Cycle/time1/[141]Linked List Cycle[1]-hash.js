/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    let map = new Map()
    let cur = head

    while(cur){
        if(map.has(cur)){
            return true
        }else{
            map.set(cur,true)
        }
        cur = cur.next
    }
    return false
};
// @lc code=end
