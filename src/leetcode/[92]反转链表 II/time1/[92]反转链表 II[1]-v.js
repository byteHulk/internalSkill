/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseLinkedList= (head)=>{
  let pre = null
  let cur = head
  while(cur) {
    nex = cur.next
    cur.next = pre;
    pre = cur;
    cur = nex
  }
}

var reverseBetween = function(head, left, right) {
  let dummy = new ListNode(-1,head);
  let pre = dummy;
  for(let i=0;i<left-1;i++){
    pre = pre.next
  }
  let back = pre;
  for(let i=0;i<right-left+1;i++){
    back = back.next;
  }
  let preNode = pre.next;
  let backNode = back.next;
  pre.next = null;
  back.next = null;

  reverseLinkedList(preNode);
  pre.next = back;
  preNode.next = backNode;

  return dummy.next
};
// @lc code=end
