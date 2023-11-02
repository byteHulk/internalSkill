## 24 两两交换链表中的节点

### 前言
本题主要考察链表的API及基础算法的理解和使用


### 解法一：循环 or 迭代
- 循环: 需要一个哨兵节点来进行下面的节点交换, 和平常不一样的情况是, 需要少循环一个节点, 否则无法改变前一个节点的 next 指针
- 迭代: 不需要哨兵节点, 返回的时候把节点换一下就行

注意: 找个两种方法的终止条件相反!

```js
var swapPairs = function (head) {
  if (head === null || head.next === null) return head

  let node1 = head
  let node2 = head.next

  node1.next = swapPairs(node2.next)
  node2.next = node1

  return node2
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    