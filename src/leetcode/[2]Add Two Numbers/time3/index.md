## 2 两数相加

### 前言
本题主要考察链表的API及基础算法的理解和使用


### 解法一：哨兵节点法
创建一个哨兵节点,将两个链表相加的值进行新链表的赋值, 需要注意的是:
- carry 进位标志,循环到最后如果还为1 , 则应该再次循环
- 如何判断是否应该进位, 可以用字符串分割方法和数字和 >= 10 比较方法(个位的值可以 - 10)


```js
var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode(0)
  let tail = dummyNode

  // 是否进位
  let carry = 0

  while (l1 || l2 || carry) {
    const [l1Val, l2Val] = [l1?.val || 0, l2?.val || 0]

    let sum = l1Val + l2Val + carry

    carry = 0

    if (sum >= 10) {
      carry = 1
      sum -= 10;
    }

    tail.next = new ListNode(sum)
    tail = tail.next
    l1 = l1?.next
    l2 = l2?.next
  }

  return dummyNode.next
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    