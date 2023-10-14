## 450 删除二叉搜索树中的节点

### 前言
本题主要考察二叉树基础算法的理解和使用


### 解法一：DFS
返回一个递归函数,在这个函数里修改可能含有目标 key 的子树, 当找到这个节点时, 如果子节点不完全,则直接返回其他子树, 否则就循环从右子树中查找到缺少左子树的节点进行修改, 最后返回右子树

```js
var deleteNode = function (root, key) {
  function callDFS(node) {
    if (!node) return null
    if (node.val === key) {
      if (!node.left) return node.right
      if (!node.right) return node.left

      let curr = node.right
      while (curr.left) curr = curr.left
      curr.left = node.left

      return node.right
    }
    if (key > node.val) node.right = callDFS(node.right)
    else node.left = callDFS(node.left)
    return node
  }
  return callDFS(root)
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    