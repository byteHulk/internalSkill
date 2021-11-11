/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode();
    let current = list;
    let carry = 0;
    
    while(l1 !== null || l2 !== null){

        let sum = 0;

        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry
        current.next = new ListNode(sum%10);
        carry = Math.floor(sum/10);
        current = current.next;
    }

    // 当while循环结束时，carry大于0 则需进位
    if(carry>0){
        current.next = new ListNode(carry);
    }

    return list.next
};
// @lc code=end
