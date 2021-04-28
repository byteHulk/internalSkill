## 24 Swap Nodes in Pairs

### 前言
本题主要考察链表基础的理解和使用


### 解法一：递归
通过递归的方式实现两两交换链表中的节点。

递归的终止条件是链表中没有节点，或者链表中只有一个节点，此时无法进行交换。

如果链表中至少有两个节点，则在两两交换链表中的节点之后，原始链表的头节点变成新的链表的第二个节点，原始链表的第二个节点变成新的链表的头节点。链表中的其余节点的两两交换可以递归地实现。在对链表中的其余节点递归地两两交换之后，更新节点之间的指针关系，即可完成整个链表的两两交换。

用 head 表示原始链表的头节点，新的链表的第二个节点，用 newHead 表示新的链表的头节点，原始链表的第二个节点，则原始链表中的其余节点的头节点是 newHead.next。令 head.next = swapPairs(newHead.next)，表示将其余节点进行两两交换，交换后的新的头节点为 head 的下一个节点。然后令 newHead.next = head，即完成了所有节点的交换。最后返回新的链表的头节点 newHead。


```
var swapPairs = function(head) {
    if(head === null || head.next === null)
        return head

     let firstNode = head
     let secondNode = head.next

    firstNode.next  = swapPairs(secondNode.next)
    secondNode.next = firstNode
    return secondNode
};
```

#### 算法复杂度分析
- 时间复杂度：O(n) 需要对每个节点进行更新指针的操作
- 空间复杂度：O(n) 空间复杂度主要取决于递归调用的栈空间
&nbsp;
### 解法二：迭代法
创建临时结点 dummyHead，令 dummyHead.next = head。令 temp 表示当前到达的节点，初始时 temp = dummyHead。每次需要交换 temp 后面的两个节点。

如果 temp 的后面没有节点或者只有一个节点，则没有更多的节点需要交换，因此结束交换。否则，获得 temp 后面的两个节点 node1 和 node2，通过更新节点的指针关系实现两两交换节点。

具体而言，交换之前的节点关系是 temp -> node1 -> node2，交换之后的节点关系要变成 temp -> node2 -> node1，因此需要进行如下操作。


```
const swapPairs = (head) => {
  const dummy = new ListNode(0)
  dummy.next = head
  let prev = dummy

  while (head && head.next) {
    const next = head.next 
    head.next = next.next
    next.next = head
    prev.next = next

    prev = head 
    head = head.next 
  }
  return dummy.next
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    