## 24 两两交换链表中的节点

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：递归


```js
var swapPairs = function(head) {
  if(!head ||!head.next) return head
  let one = head;
  let two = head.next;
  let three = two.next;

  two.next = one;
  one.next = swapPairs(three)

  return two;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
    