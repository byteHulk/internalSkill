## 92 反转链表 II

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：将两头断开 中间用翻转链表法 再将两头连接


```js
const reverseLinkedList= (head)=>{
  let pre = null
  let cur = head
  while(cur) {
    nex = cur.next
    cur.next = pre;
    pre = cur;
    cur = nex
  }
}

var reverseBetween = function(head, left, right) {
  let dummy = new ListNode(-1,head);
  let pre = dummy;
  for(let i=0;i<left-1;i++){
    pre = pre.next
  }
  let back = pre;
  for(let i=0;i<right-left+1;i++){
    back = back.next;
  }
  let preNode = pre.next;
  let backNode = back.next;
  pre.next = null;
  back.next = null;

  reverseLinkedList(preNode);
  pre.next = back;
  preNode.next = backNode;

  return dummy.next
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;

### 解法二：


```js
// ???? 没看懂 
var reverseBetween = function(head, left, right) {
  let dummy = new ListNode(-1,head);
  let pre = dummy;
  for (let i=0;i<left-1;i++){
    pre = pre.next;
  }
  let curr = pre.next;
  for(let i=0;i<right-left;i++){
    const nex = curr.next;
    curr.next = nex.next;
    nex.next = pre.next;
    pre.next = nex;
  }
  
  return dummy.next
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
