## 141 Linked List Cycle

### 前言
本题主要考察链表基础的理解和使用

### 解法一：哈希表
遍历链表，同时用哈希表存储节点的值，如果存在即返回true,否则该链表是没有环的

```
var hasCycle = function(head) {
    let map = new Map()
    let cur = head

    while(cur){
        if(map.has(cur)){
            return true
        }else{
            map.set(cur,true)
        }
        cur = cur.next
    }
    return false
};
```

#### 算法复杂度分析
- 时间复杂度：O(n) 遍历一次链表
- 空间复杂度：O(n) 哈希表的开销
&nbsp;
### 解法二：快慢指针
本方法需要读者对「Floyd 判圈算法」（又称龟兔赛跑算法）有所了解。

假想「乌龟」和「兔子」在链表上移动，「兔子」跑得快，「乌龟」跑得慢。当「乌龟」和「兔子」从链表上的同一个节点开始移动时，如果该链表中没有环，那么「兔子」将一直处于「乌龟」的前方；如果该链表中有环，那么「兔子」会先于「乌龟」进入环，并且一直在环内移动。等到「乌龟」进入环时，由于「兔子」的速度快，它一定会在某个时刻与乌龟相遇，即套了「乌龟」若干圈。

```
var hasCycle = function (head) {
  if (head == null || head.next == null) {
    return false
  }

  let slow = head
  let fast = head.next

  while (slow) {
    if (slow === fast) {
      return true
    }
    slow = slow?.next || null
    fast = fast?.next?.next || null
  }
  return false
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 遍历一次链表
- 空间复杂度：O(1)
&nbsp;
| 以下在leetcode看到的天秀解法，笑死...
### 解法三：报错法
还就那个报错求解

```
var hasCycle = function(head) {
    try {
        JSON.stringify(head)
    } catch{
        return true
    }
    return false
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1)
&nbsp;
### 解法四：给节点打tag
给遍历过的节点打记号，如果遍历过程中遇到有记号的说明已环

```
const hasCycle = function(head) {
  while (head) {
    if (head.tag) {
      return true;
    }
    head.tag = true;
    head = head.next;
  }
  return false;
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1)
&nbsp;
### 解法四：鸡贼法
题目说了范围不超过100000，没超过size能发现空节点就是没有环， 超过了就是有环！！！

```
const hasCycle = function(head) {
  let i = 0, size = 100000
  let node = head
  while (++i <= size) {
    if(!node) return false
    node = node.next
  }
  return true;
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1)
&nbsp;
    