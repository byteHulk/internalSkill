## 148 排序链表

### 前言
本题主要考察链表的API及基础算法的理解和使用


### 解法一：自顶向下归并排序
自顶向下进行排序，用快慢指针找到链表的中点，将链表拆分为子链表并分别进行排序，最后将两个链表进行合并


```js
var sortList = function(head) {
    //1.split linkList 2.sort two linkList 3.merge
    
    const merge = (l1,l2) => {
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
            tail = tail.next
        }
        tail.next = l1 ? l1 : l2  
        return dummyNode.next
    }

    const toSortList = (head,tail) => {
        if (head === null) {
            return head;
        }
        if (head.next === tail) {
            head.next = null;
            return head;
        }
        let slow = head, fast = head
        while(fast !== tail){
            slow = slow.next
            fast = fast.next
            if (fast !== tail) {
                fast = fast.next;
            }
        }
        let mid = slow
        return merge(toSortList(head,mid),toSortList(mid,tail))
    }
    return toSortList(head, null);
};
```

#### 算法复杂度分析
- 时间复杂度：O(n logn)
- 空间复杂度：O(logn) n为链表的长度 空间复杂度主要取决于递归调用的栈空间
&nbsp;

### 解法二：自底向上归并排序
自底向上归并排序，可以将空间复杂度优化为O(1)，每次将链表拆分为若干个长度为 subLength 的子链表， subLength 从1开始，每轮翻倍，对更长的有序链表进行合并，直到 subLength 大于整个链表的长度，排序完毕


```js
var sortList = function(head) {
    //1.split linkList 2.sort two linkList 3.merge
    
    const merge = (l1,l2) => {
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
            tail = tail.next
        }
        tail.next = l1 ? l1 : l2  
        return dummyNode.next
    }

    let length = 0
    let node = head

    while(node !== null){
        length++
        node = node.next
    }
    const dummyNode = new ListNode(0,head)
    for(let subLength = 1; subLength < length; subLength <<= 1 ){
        let prev = dummyNode, curr = dummyNode.next;
        while (curr !== null) {
            let head1 = curr;
            for (let i = 1; i < subLength && curr.next !== null; i++) {
                curr = curr.next;
            }
            let head2 = curr.next;
            curr.next = null;
            curr = head2;
            for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
                curr = curr.next;
            }
            let next = null;
            if (curr !== null) {
                next = curr.next;
                curr.next = null;
            }
            const merged = merge(head1, head2);
            prev.next = merged;
            while (prev.next !== null) {
                prev = prev.next;
            }
            curr = next;
        }
    }
    return dummyNode.next;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n logn)
- 空间复杂度：O(1) 
&nbsp;