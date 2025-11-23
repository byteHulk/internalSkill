## 82 删除排序链表中的重复元素 II

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：


```js
var deleteDuplicates = function (head) {
  const dummyNode = new ListNode(0, head);
  let cur = dummyNode;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let curVal = cur.next.val;
      while (cur.next && cur.next.val === curVal) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next;
    }
  }

  return dummyNode.next;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
都只会遍历链表一次

- 空间复杂度：O(1) 
dummy 只会存储一个头指针，cur 也是一个指针
&nbsp;
    