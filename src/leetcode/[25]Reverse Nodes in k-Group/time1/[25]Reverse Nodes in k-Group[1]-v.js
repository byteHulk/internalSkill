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
    let prev = tail?.next
    let cur = head

    while (prev !== tail) {
      const nxt = cur?.next
      cur.next = prev
      prev = cur
      cur = nxt
    }

    // 1 2 3 4
    // 2 1 4 3
    return [tail, head]
  }

  const isReverse = (head) => {
    //一个节点无法翻转
    if (k === 1) return [false, head, head]

    let cur = head
    let i = k - 1

    while (i > 0) {
      const nxt = cur?.next
      if (nxt) {
        cur = nxt
      } else {
        return [false, head, cur]
      }
      i--
    }
    return [true, head, cur]
  }

  let [isR, h, t] = isReverse(head)
  let [newHead, newTail] = [null, null]

  //是否可翻转
  //是
  //翻转链表，将之前翻转的尾节点 next指向 翻转后的头节点

  //否
  //前面是否有翻转的节点
  //是
  //将尾节点next指向当前的头节点
  //否
  //返回head
  while (isR) {
    const nex = t?.next
    const [reHead, reTail] = reverseLinkedList(h, t)

    if(newTail){
        newTail.next = reHead
    }

    newTail = reTail
    if (!newHead) {
      newHead = reHead
    }
    
    ;[isR, h, t] = isReverse(nex)
  }

  if (newTail) {
    newTail.next = h
    return newHead
  }

  return head
}
// @lc code=end