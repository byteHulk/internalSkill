## 19 删除链表的倒数第 N 个结点

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：双指针
两个指针n1和n2，因为链表删除只能使被删除元素前面的元素的指针指向被删除元素后面的元素，所以两指针之间要相隔n+1个距离，通过循环遍历,指针n1.next == null时停止，将删除元素前面的元素与删除元素后面的元素相连。


```js
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0,head),
        n1 = n2 = dummy;
    while(n--) n1 = n1.next;
    if(!n1) return dummy.next
    while(n1.next){
        n1 = n1.next;
        n2 = n2.next;
    };
    n2.next = n2.next.next;
    return dummy.next;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    