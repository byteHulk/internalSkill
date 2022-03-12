## 94 二叉树的中序遍历

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：递归
中序遍历是指：先左再根最后右的顺序。
递归，以子节点为空为基线。
用递归先查找左边子节点直至最后，根据调用栈的顺序，出栈。
出栈后向后进行，先将当前节点的数值push进数组，再查找右侧揍完后，再走下一个循环。

```js
var inorderTraversal = function(root) {
  const res=[];
  const inorder = (root)=>{
    if(!root)return;
    inorder(root.left)
    res.push(root.val)
    inorder(root.right);
  }
  inorder(root);
  return res
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    
### 解法一：迭代法
模拟栈操作，左根右（中序遍历）

```js
var inorderTraversal = function(root) {
  const res=[];
  const stack=[];
  while(root||stack.length){
    if(root){
      stack.push(root)
      root = root.left
    }else{
      root = stack.pop();
      res.push(root.val);
      root = root.right
    }
  }
  return res
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;