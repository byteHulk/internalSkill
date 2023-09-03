## 103 二叉树的锯齿形层序遍历

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：BFS
大框架 BFS 即可, 关键代码就一行, 根据层级判断插入方式, 这里需要注意的是: 在数组遍历中如果中途元素变更了会有大问题, 这里的小技巧就是先保存一个 size 然后会按这个 size 的缓存来进行遍历

群友非规范解法, 只是结果正常, 但实际遍历顺序不一样,注意使用场景!

- 直接层序遍历加结果奇数下标倒序完事
- 双端队列更方便，奇数下标头插就行

```js
var zigzagLevelOrder = function (root) {
  if (!root) return []

  let layer = 0,
    outPut = [],
    queue = [root]

  while (queue.length) {
    let size = queue.length
    let curOutput = []

    // for of in 会跳 item
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()

      if (layer % 2) curOutput.unshift(cur?.val)
      else curOutput.push(cur?.val)

      if (cur?.left) queue.push(cur?.left)
      if (cur?.right) queue.push(cur?.right)
    }

    outPut.push(curOutput)

    layer++
  }
  return outPut
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    