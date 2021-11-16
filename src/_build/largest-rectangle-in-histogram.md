## 84 柱状图中最大的矩形

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：单调栈
维护一个栈，存放每个柱子的左右边界，这样节省了每次遍历需要重复去求每根柱子的左右边界的时间

```js
var largestRectangleArea = function (heights) {
  let maxArea = 0
  const stack = []
  heights = [0].concat(heights).concat([0])
  for (let i = 0; i < heights.length; i++) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop()
      maxArea = Math.max(
        (i - stack[stack.length - 1] - 1) * heights[j],
        maxArea
      )
    }

    stack.push(i)
  }
  return maxArea
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
    