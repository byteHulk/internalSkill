## 61 旋转链表

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：无限循环截断


```js
var rotateRight = function(head, k) {
  if(!head || !head.next || !k) return head;
  let len = 1,cur = head;
  while(cur.next) {
    cur = cur.next;
    len++
  }
  let move = len - k %len;
  cur.next = head;
  while(move) {
    cur = cur.next;
    move --;
  }
  let ans = cur.next;
  cur.next = null;
  return ans
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    