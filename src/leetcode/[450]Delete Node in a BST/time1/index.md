## 450 删除二叉搜索树中的节点

### 前言

本题主要考察队二叉树基础算法的理解和使用

### 解法一：递归

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

- 时间复杂度：O(logN)
- 空间复杂度：O(H)
  &nbsp;
