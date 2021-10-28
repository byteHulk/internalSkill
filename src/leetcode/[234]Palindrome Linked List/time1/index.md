## 234 回文链表

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：快慢指针
通过快慢指针将链表分为两部分，反转后半部分链表，将前后两部分进行比较，如果不同即非回文，返回false

```js
var isPalindrome = function (head) {
  //1.reverse 2.compare

const findCenter = (head) => {
    let slower = head,
      faster = head
    while (faster && faster.next != null) {
      slower = slower.next
      faster = faster.next.next
    }
    // if faster !== null，说明是奇数个，slower 再移动一格
    if (faster != null) {
      slower = slower.next
    }
    return slower
  }

  const reverse = (head) => {
    let prev = null,
      cur = head,
      nxt = head
    while (cur != null) {
      nxt = cur.next
      cur.next = prev
      prev = cur
      cur = nxt
    }
    return prev
  }
  
  let right = reverse(findCenter(head))
  let left = head

  while (right != null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 链表大小
- 空间复杂度：O(1) 
&nbsp;
    