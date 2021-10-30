## 23 合并K个升序链表

### 前言
本题主要考察链表的API及基础算法的理解和使用


### 解法一：顺序合并/分治合并
把问题拆解为合并两个链表，再进行顺序合并/分治合并

```js
var mergeKLists = function(lists) {
    let N = lists.length
    if(N === 0) return null
    let res = lists[0]
    const mergeTwoLists = (l1,l2) => {
        let dummyNode = new ListNode(0)
        let tail = dummyNode
        
        while(l1 && l2){
            if(l1.val < l2.val){
                tail.next = l1
                l1 = l1.next
            }else{
                tail.next = l2
                l2 = l2.next
            }
            tail = tail?.next
        }
        tail.next = l1 ? l1 : l2
        return dummyNode.next
    }

    for(let i = 1;i < N;i++){
        if(lists[i]){
            res = mergeTwoLists(res,lists[i])
        }
    }
    return res
};
```

#### 算法复杂度分析
- 时间复杂度：O(k^2 n)
- 空间复杂度：O(1) 
&nbsp;
    