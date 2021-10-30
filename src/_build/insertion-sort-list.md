## 147 对链表进行插入排序

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：插入排序
从head.next开始遍历链表，建立哨兵节点(为了方便在head前插入节点)，创建一个指针指向已排序的尾部节点，如果当前节点的值大于指针指向的节点，则直接将指针往后移一位，如果小于最后一个节点时，则哨兵节点的next节点开始寻找插入位置


```js
var insertionSortList = function (head) {
  if (head === null) return head

  let dummyNode = new ListNode(0)
  dummyNode.next = head
  let tail = head
  let cur = head.next

  while (cur) {
    if (cur.val >= tail.val) {
      tail = tail.next
    } else {
      let prev = dummyNode
      while (cur.val >= prev.next.val) {
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
```

#### 算法复杂度分析
- 时间复杂度：O(n^2)
- 空间复杂度：O(1) 
&nbsp;
    