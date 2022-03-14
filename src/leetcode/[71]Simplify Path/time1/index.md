## 71 简化路径

### 前言
本题主要考察堆栈的API及基础算法的理解和使用


### 解法一：堆栈


```js
var simplifyPath = function (path) {
  let stack = []
  let pathArr = path.split('/')

  for (let p of pathArr) {
    if (p === '.' || p === '') continue
    if (p === '..') stack.pop()
    else stack.push(p)
  }
  
  return '/' + stack.join('/')

}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
    