## 503 下一个更大元素 II

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：单调栈
- 维护一个单调递增栈
- 由于需要循环搜索更大元素，可以使用循环数组(将 len - 1 拼在数组后， index 的取值为 i % len)
- 每次循环 while 一个如果栈顶元素小于当前索引元素，则将栈顶索引对应的结果数组赋值为当前索引元素(当前索引元素即为更大的元素)，然后弹出栈顶元素
- 入栈一个当前元素索引(i % len)
  
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
    