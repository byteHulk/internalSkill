## 83 删除排序链表中的重复元素

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：遇到重复的链表节点，就跳过这个节点


```js
var deleteDuplicates = function (head) {
  let cur = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
每个节点最多访问 一次。
删除操作也是 O(1)。

- 空间复杂度：O(1) 
只使用了常量级变量（cur），没有额外数据结构。
&nbsp;
    