## 100 相同的树

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：递归
先判度左右是否为都为空，在判断数值是否相等

```js
var isSameTree = function(p, q) {
  if(!p&&!q)return true;
  if(!p||!q)return false;
  if(p.val!==q.val) return false
  return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right)
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    