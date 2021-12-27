## 86 分隔链表

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：组合双链表
创建连个链表 一个存放小于x的数，另一个存放大于等于x的数，最后将两个链表合为一个链表


```js
var partition = function(head, x) {
  let fdum = new ListNode(0),bdum = new ListNode(0);
  let [front,back,curr] = [fdum,bdum,head]
  while(curr) {
    if(curr.val < x) {
      front.next = curr 
      front = front.next
    } else {
      back.next = curr
      back = back.next
    }
    curr = curr.next
  }
  front.next = bdum.next;
  back.next = null;
  return fdum.next
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    