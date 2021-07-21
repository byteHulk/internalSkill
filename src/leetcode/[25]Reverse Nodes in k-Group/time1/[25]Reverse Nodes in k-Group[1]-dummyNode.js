/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
var reverseKGroup = function (head, k) {
  //1.判断是否为当前要翻转的链表是否比k小 => 是否可翻转
  //2.翻转链表 => 头接尾巴

  const reverseLinkedList = (head, tail) => {
    //cur.next => prev
    //cur.next.next => cur
    //pre => cur
    //cur => nxt(cur.next)
    //把当前节点的next指向上一个节点 ！！！

    let prev = tail.next
    let cur = head

    while (prev !== tail) {
      const nxt = cur.next
      cur.next = prev //核心
      prev = cur
      cur = nxt
    }
    // 1 2 3 4
    // 4 3 2 1
    console.log(prev, cur, "prev,cur")
    console.log(tail, head, "tail,head")
    return [tail, head]
  }

  const dummyNode = new ListNode(0)
  dummyNode.next = head
  let pre = dummyNode

  while (head) {
    let tail = pre
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) return dummyNode.next
    }
    const nxt = tail.next
    ;[head, tail] = reverseLinkedList(head, tail)

    pre.next = head
    tail.next = nxt
    pre = tail
    head = tail.next
  }
  return dummyNode.next
}
// @lc code=end
