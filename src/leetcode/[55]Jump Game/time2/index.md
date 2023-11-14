## 55 跳跃游戏

### 前言

本题主要考察数组的 API 及基础算法的理解和使用

### 解法一：DP

dp[i] 代表 nums[i] 之前能达到的最远距离,状态转移方程为:
dp[i] = Math.max(dp[i - 1], i + nums[i])

如果最远距离小于当前位置则代表跳跃不成功

优化:
观察发现除了 nums[i] dp[i] 只和 dp[i - 1] 有关,则可以优化空间, 将数组 dp 变成一个变量保存前一个位置的最大跳跃距离

```js
var canJump = function (nums) {
  // dp[i] = nums[i]之前所能到达的最远距离
  let maxJumpLength = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > maxJumpLength) return false

    maxJumpLength = Math.max(maxJumpLength, i + nums[i])
  }

  return true
}
```

#### 算法复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)
  &nbsp;
