## 111 二叉树的最小深度

### 前言
本题主要考察 bfs 基础算法的理解和使用


### 解法一：bfs


```js
var minDepth = function (root) {
  //bfs queue
  if(!root) return 0
  //初始化队列
  let queue = [root],
    depth = 0

  while (queue.length > 0) {
    let len = queue.length
    depth++
    for (let i = 0; i < len; i++) {
      let node = queue.pop()
      if (node?.left) queue.unshift(node?.left)
      if (node?.right) queue.unshift(node?.right)
      if(!node?.left && !node?.right) return depth
    }
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
### 解法二：dfs


```js
var minDepth = function (root) {
  if(!root) return 0
  if(!root?.left) return minDepth(root?.right) + 1
  if(!root?.right) return minDepth(root?.left) + 1
  return Math.min(minDepth(root.left),minDepth(root.right)) + 1
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(H) 树的高度