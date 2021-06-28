## 142 环形链表 II

### 前言
本题主要考察链表基础的理解和使用


### 解法一：
遍历链表，同时用哈希表存储节点的值，如果存在即返回该节点,否则该链表是没有环的

```js
var detectCycle = function(head) {
    let map = new Map()
    let cur = head

    while(cur){
        if(map.has(cur)){
            return cur
        }else{
            map.set(cur)
        }
        cur = cur.next
    }

    return null
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 最坏情况下存储整个链表
&nbsp;
### 解法二：快慢指针
本方法需要读者对「Floyd 判圈算法」（又称龟兔赛跑算法）有所了解。

假想「乌龟」和「兔子」在链表上移动，「兔子」跑得快，「乌龟」跑得慢。当「乌龟」和「兔子」从链表上的同一个节点开始移动时，如果该链表中没有环，那么「兔子」将一直处于「乌龟」的前方；如果该链表中有环，那么「兔子」会先于「乌龟」进入环，并且一直在环内移动。等到「乌龟」进入环时，由于「兔子」的速度快，它一定会在某个时刻与乌龟相遇，即套了「乌龟」若干圈。

```js
var detectCycle = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (fast == slow) {
      slow = head
      while (fast !== slow) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 遍历一次链表
- 空间复杂度：O(1)
&nbsp;
### 解法三：打tag方法
本方法为遍历链表，在访问过的链表上加一个seen属性，如果发现遍历到一个元素已有seen属性则输出该节点，不推荐该方法，因为会修改原链表

```js
var detectCycle = function (head) {
    
    function run(node) {
        if(!node) return false;
        if(node.seen) return true;
        node.seen = true;
        return run(node.next);
    }
    return run(head);
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 遍历一次链表
- 空间复杂度：O(1)
&nbsp;

