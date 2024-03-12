/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function(head) {
    //1.split linkList 2.sort two linkList 3.merge
    
    const merge = (l1,l2) => {
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
            tail = tail.next
        }
        tail.next = l1 ? l1 : l2  
        return dummyNode.next
    }

    let length = 0
    let node = head

    while(node !== null){
        length++
        node = node.next
    }
    const dummyNode = new ListNode(0,head)
    for(let subLength = 1; subLength < length; subLength <<= 1 ){
        let prev = dummyNode, curr = dummyNode.next;
        while (curr !== null) {
            let head1 = curr;
            for (let i = 1; i < subLength && curr.next !== null; i++) {
                curr = curr.next;
            }
            let head2 = curr.next;
            curr.next = null;
            curr = head2;
            for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
                curr = curr.next;
            }
            let next = null;
            if (curr !== null) {
                next = curr.next;
                curr.next = null;
            }
            const merged = merge(head1, head2);
            prev.next = merged;
            while (prev.next !== null) {
                prev = prev.next;
            }
            curr = next;
        }
    }
    return dummyNode.next;
};
// @lc code=end
