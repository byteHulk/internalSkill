## 236 二叉树的最近公共祖先

### 前言

本题主要考察二叉树的 API 及基础算法的理解和使用

### 解法一：递归

深度优先遍历二叉树，结束递归条件为 root 为 null 或遍历到两个结果节点，如果返回两个子节点则说明当前节点为 p q 的上层组件，如果只有一个节点则直接返回该节点 （非常优雅的解法）

```js
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root
  let resL = lowestCommonAncestor(root.left, p, q)
  let resR = lowestCommonAncestor(root.right, p, q)
  return resL && resR ? root : resL || resR
}
```

#### 算法复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n) 递归调用的栈深度取决于二叉树的高度
  &nbsp;
