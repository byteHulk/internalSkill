## 3172 分类求和并作差

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：


```js
var differenceOfSums = function (n, m) {
  let result = 0;

  let num1 = 0,
    num2 = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      num2 += i;
    } else {
      num1 += i;
    }
  }

  return num1 - num2;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    