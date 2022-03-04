## 496 下一个更大元素 I

### 前言
本题主要考察单调栈及基础算法的理解和使用


### 解法一：单调栈


```js
var nextGreaterElement = function (nums1, nums2) {
  let map = {},
    stack = []

  for (let i = nums2.length - 1; i >= 0; i--) {
    while(stack.length && nums2[i] >= stack[stack.length - 1]) stack.pop()
    map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums2[i]);
  }
  
  return Array(nums1.length).fill(0).map((_,i) => map[nums1[i]])
}
```

#### 算法复杂度分析
- 时间复杂度：O(m + n)
- 空间复杂度：O(n) 
&nbsp;
    