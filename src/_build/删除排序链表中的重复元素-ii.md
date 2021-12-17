## 82 删除排序链表中的重复元素 II

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：
因为是已经排序的链表，所以若存在重复值，一定是连续的，所以此时要判断当前值及后面的值是否相等若相等，则删除当前值并且当前值指向下一个值，当无重复值时跳出循环，接着遍历链表

```js
var deleteDuplicates = function(head) {
  if(!head) {
    return head
  }
  let dummy = new ListNode(0,head),
    cur = dummy;
  while(cur.next && cur.next.next) {
    if(cur.next.val === cur.next.next.val) {
      let x = cur.next.val
      while(cur.next && cur.next.val === x){
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    