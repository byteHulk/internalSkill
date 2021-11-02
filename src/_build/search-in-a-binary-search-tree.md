## 700 二叉搜索树中的搜索

### 前言
本题主要考察二叉树基础算法的理解和使用


### 解法一：递归



```js
var searchBST = function (root, val) {
  if (!root || root.val === val) return root

  let resL = searchBST(root.left, val)
  let resR = searchBST(root.right, val)

  return resL ? resL : resR
}
```

#### 算法复杂度分析
- 时间复杂度：O(H)
- 空间复杂度：O(H) 递归栈的深度为 H
&nbsp;
### 解法一：迭代



```js
var searchBST = function (root, val) {
  while (root !== null && val != root.val)
    root = val < root.val ? root.left : root.right
  return root
}
```

#### 算法复杂度分析
- 时间复杂度：O(H)
- 空间复杂度：O(1) 
&nbsp;