## 103 二叉树的锯齿形层序遍历

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：BFS广度优先遍历
使用优先队列进行树的BFS，通过deep(当前层)采取不同的从左到右/从右到左的添加节点方法


```js
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let output = []
  let deep = 0
  while (queue.length > 0) {
    const size = queue.length
    const level = []

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (deep % 2 == 0) level.push(node.val)
      else level.unshift(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    output.push(level)
    deep++
  }

  return output
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
### 解法二：巧妙的解法
通过l(当前层)采取不同的从左到右/从右到左的添加节点方法


```js
var zigzagLevelOrder = function (root) {
  const helper = (node, l, res) => {
    if (!node) return

    if (res[l] == null) {
      res.push([])
    }

    if (l % 2 === 0) res[l].push(node.val)
    else res[l].unshift(node.val)

    helper(node.left, l + 1, res)
    helper(node.right, l + 1, res)
  }

  let res = []
  helper(root, 0, res)
  return res
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;