/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function (head) {
  const dummyNode = new ListNode(0)
  dummyNode.next = head
  let tail = head,
    cur = head.next

  while (cur) {
    if (cur.val >= tail.val) {
      tail = tail.next
    }else{
        let prev = dummyNode
        while(prev.next.val <= cur.val){
            prev = prev.next
        }
        tail.next = cur.next
        cur.next = prev.next
        prev.next = cur
    }

    cur = tail.next
  }

  return dummyNode.next
}
// @lc code=end
