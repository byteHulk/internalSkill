## 53 最大子数组和

### 前言
本题主要考察动态规划算法的理解和使用


### 解法一：dp
该问题可以分解成相同的子问题，且每个自问题都有局部最优解

```js
var maxSubArray = function (nums) {
  var prev = 0
  var max = -Number.MAX_VALUE

  for (var i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(max, prev)
  }
  return max
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    