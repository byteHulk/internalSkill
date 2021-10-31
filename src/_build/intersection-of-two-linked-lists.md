## 160 相交链表

### 前言

本题主要考察数组的 API 及基础算法的理解和使用

### 解法一：哈希集合

将链表 A 每个节点存储在 set 里，再遍历链表 B，如果有重合即返回当前节点，否则返回 null

```js
var getIntersectionNode = function (headA, headB) {
  const visited = new Set()
  let temp = headA
  while (temp !== null) {
    visited.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}
```

#### 算法复杂度分析

- 时间复杂度：O(m + n)
- 空间复杂度：O(m) 存储长度为 m 的链表 A
  &nbsp;

### 解法二：双指针

通过优化掉存储链表 A 用到的哈希集合，能把空间复杂度优化到 O(1),每次操作更新两个指针，如果指针为空则将指针指向另一个链表的头部，如果两个指针指向同一个节点则返回该节点，若都为空则返回 null

```js
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let pA = headA,
    pB = headB
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}
```

#### 算法复杂度分析

- 时间复杂度：O(m + n)
- 空间复杂度：O(1)
  &nbsp;
