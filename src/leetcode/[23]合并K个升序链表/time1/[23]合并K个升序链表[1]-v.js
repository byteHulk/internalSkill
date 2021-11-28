/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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

function mergeLists(a, b) {
  let dummy = new ListNode(0);
  let temp = dummy;

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  if (a !== null) {
    temp.next = a;
  }
  if (b !== null) {
    temp.next = b;
  }
  return dummy.next;
}

var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    const newlist = mergeLists(a, b);
    lists.push(newlist);
  }
  return lists[0];
};
// @lc code=end
