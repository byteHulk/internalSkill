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
    
    const sortMergeLinkList = (l1,l2) => {
        let dummyNode = new ListNode(0),
        tail = dummyNode

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

        tail.next = l1 || l2

        return dummyNode.next
    }

    const handleSortList = (head,tail) => {
        if(head === null) return head

        if(head.next === tail){
            head.next = null
            return head
        }

        let slow = fast = head

        while(fast !== tail){
            slow = slow.next
            fast = fast.next

            if(fast !== tail) fast = fast.next
        }

        return sortMergeLinkList(handleSortList(head,slow),handleSortList(slow,tail))

    }

    return handleSortList(head,null)
};
// @lc code=end
