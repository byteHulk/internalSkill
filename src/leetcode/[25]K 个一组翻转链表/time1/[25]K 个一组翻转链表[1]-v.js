/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
function reverseGroup(head,tail) {
  let [prev,curr] = [tail.next,head]
  while(prev !== tail) {
    [curr.next,prev,curr]=[prev,curr,curr.next]
  }
  return [tail,head]
}

var reverseKGroup = function(head, k) {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  while(head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于K
    for(let i = 0;i < k;++i) {
      tail = tail.next;
      if(!tail) {
        return hair.next;
      }
    }
    const nex = tail.next;
    [head,tail] = reverseGroup(head,tail);
    // 把子链表重新接回原链表
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next
};
// @lc code=end
