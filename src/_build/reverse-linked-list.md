## 206 反转链表

### 前言
本题主要链表基础的理解和使用


### 解法一：迭代法
在遍历链表时，将当前节点的 next 指针改为指向前一个节点。由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。

```
var reverseList = function (head) {
  let prev = null
  let cur = head
  while(cur){
      const nxt = cur.next
      cur.next = prev
      prev = cur
      cur = nxt
  }
  return prev
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 遍历链表一次
- 空间复杂度：O(1) 
&nbsp;
### 解法二：递归法
把大问题拆成子问题，使用递归法我们也可以求解，层层反转把前一个next指向当前节点，最后当递归到原来的尾节点时把节点返回，即完成了链表反转

```
var reverseList = function (head) {
  if(head === null || head.next === null){
    return head
  }
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 需要对链表的每个节点进行反转操作。
- 空间复杂度：O(n) 递归调用的栈空间，最多为 n 层
&nbsp;
    