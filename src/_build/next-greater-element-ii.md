## 503 下一个更大元素 II

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：单调栈


```js
var nextGreaterElements = function (nums) {
  const len = nums.length
  const [result, stack] = [new Array(len).fill(-1), []]

  for (let i = 0; i < len * 2 - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]){
        result[stack[stack.length - 1]] = nums[i % len];
        stack.pop()
    }
    stack.push(i % len);
  }

  return result
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
    