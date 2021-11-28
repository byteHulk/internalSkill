## 206 反转链表

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：迭代


```js
var reverseList = function(head) {
  let [prev,curr] = [null,head]
  while(curr) {
    [curr.next,prev,curr] = [prev,curr,curr.next]
  }
  return prev
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    