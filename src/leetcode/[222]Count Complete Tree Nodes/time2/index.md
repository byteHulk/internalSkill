## 222 完全二叉树的节点个数

### 前言

本题主要考察数组的 API 及基础算法的理解和使用

### 解法一：BFS 广度优先遍历

```js

```

#### 算法复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)
  &nbsp;

### 解法二：二分查找 + 位运算

### 解法三：剪枝法

总体就是判断当前节点引导的子树是不是满二叉，是的话可以直接返回子树结点数，不是的话就往下遍历。由于完全二叉树的性质，左右子树中最多只有一个子树不是满二叉。所以总体的时间复杂度仍然是 logn ^ 2。感觉思路要比官方题解更直观。

```python
class Solution:
   def countNodes(self, root: Optional[TreeNode]) -> int:
       if root == None:
           return 0
       l_depth = 0
       r_depth = 0
       node = root
       while node.left:
           l_depth += 1
           node = node.left
       node = root
       while node.right:
           r_depth += 1
           node = node.right
       if l_depth == r_depth:
           return 2 ** (l_depth+1) - 1
       else:
           return self.countNodes(root.left) + self.countNodes(root.right) + 1
```
