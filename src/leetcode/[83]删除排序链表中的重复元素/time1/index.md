## 83 删除排序链表中的重复元素

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：循环检查后一个元素与前一个元素的值是否相等，若相等则删除前一个元素。
此题与82题不同之处：82题重复元素一个不留全部删除，83题重复元素要保留一个元素。


```js
var deleteDuplicates = function(head) {
  let dummy = new ListNode(0,head),
  curr = dummy;
  while(curr.next && curr.next.next) {
    if(curr.next.val === curr.next.next.val){
      curr.next = curr.next.next
    }else{
      curr = curr.next
    }
  }
  return dummy.next
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    