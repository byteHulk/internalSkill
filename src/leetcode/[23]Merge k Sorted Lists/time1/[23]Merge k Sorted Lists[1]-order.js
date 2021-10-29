/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let N = lists.length
    if(N === 0) return null
    let res = lists[0]
    const mergeTwoLists = (l1,l2) => {
        let dummyNode = new ListNode(0)
        let tail = dummyNode
        
        while(l1 && l2){
            if(l1.val < l2.val){
                tail.next = l1
                l1 = l1.next
            }else{
                tail.next = l2
                l2 = l2.next
            }
            tail = tail?.next
        }
        tail.next = l1 ? l1 : l2
        return dummyNode.next
    }

    for(let i = 1;i < N;i++){
        if(lists[i]){
            res = mergeTwoLists(res,lists[i])
        }
    }
    return res
};
// @lc code=end
