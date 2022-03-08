## 20 有效的括号

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：堆栈
遍历字符串采用遇到左括号入栈对应的右括号，遇到右括号从栈顶 pop 一个括号看是否匹配，这里为了考虑扩展性未采用 switch ，这样的写法可以将 map 抽离出去方便扩展其他符号

```js
var isValid = function (s) {
  if (s.length % 2) return false

  let map = {
      '(': ')',
      '{': '}',
      '[': ']',
    },
    stack = []

  for (let c of s) {
    if (c in map) stack.push(map[c])
    else if (stack.pop() !== c) return false
  }

  return !stack.length
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    