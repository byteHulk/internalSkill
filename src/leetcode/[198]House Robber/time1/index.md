## 198 打家劫舍

### 前言
本题主要考察动态规划算法的理解和使用


### 解法一：DP
该问题求最优解，且有最优子结构


```js
var rob = function (nums) {
  const len = nums.length
  if (len < 2) return nums?.[0] || 0

  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[len - 1]
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    