## 23 合并K个升序链表

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：将链表两两合并


```js
function mergeLists(a,b){
    let dummy = new ListNode(0);
    let temp = dummy;
    
    while(a!==null && b!==null){
        if (a.val < b.val) {
            temp.next = a;
            a = a.next;
        } else {
            temp.next = b;
            b = b.next;
        }
        temp = temp.next;
    }
    if(a!==null){
        temp.next=a;
    }
    if(b!==null){
        temp.next=b;
    }
    return dummy.next;
};


var mergeKLists = function(lists) {
    if(lists.length === 0){
        return null
    }

    while(lists.length > 1){
        let a=lists.shift();
        let b=lists.shift();
        const newlist=mergeLists(a,b);
        lists.push(newlist);
    }
    return lists[0];
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    