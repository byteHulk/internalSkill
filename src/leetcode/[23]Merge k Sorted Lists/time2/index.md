## 23 合并 K 个升序链表

### 前言
本题主要考察链表基础算法的理解和使用


### 解法一：分治法
两两进行合并, 方法为设置一个哨兵节点和一个尾节点, 哨兵节点的 next 指针作为最后返回, 尾节点用来指向链表尾部, 需要注意的是可能还有一个链表没有合并完, 要最后链接下非空的那个链表


```js
var mergeKLists = function (lists) {
  const K = lists.length
  if (!K) return null

  let res = lists[0]

  const mergeTwoLists = (l1, l2) => {
    let dummyNode = new ListNode(0)
    let tail = dummyNode

    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1
        l1 = l1.next
      } else {
        tail.next = l2
        l2 = l2.next
      }
      tail = tail.next
    }

    tail.next = l1 ? l1 : l2
    return dummyNode.next
  }

  for (let i = 1; i < K; i++) {
     res = mergeTwoLists(res, lists[i])
  }

  return res
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    