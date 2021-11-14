## 21 合并两个有序链表

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：双指针
一个指针始终指向头部作为最终返回值，一个跟随条件一级一级向后指。

```js
var mergeTwoLists = function(l1, l2) {
    let current = new ListNode();
    let dummy = current;

    
    while(l1 !== null && l2 !== null){
        if(l1.val<l2.val){
            current.next = l1;
            l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next
        }
        current = current.next;
    }

    // 若两个链表不一样长 ，则将长链表的剩余部分全部加入链表中。
    if(l1 !== null){
        current.next = l1;
    }

    if(l2 !== null){
        current.next = l2;
    }

    return dummy.next;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    