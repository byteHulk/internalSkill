## 198 打家劫舍

### 前言

本题主要考察动态规划算法的理解和使用

### 解法一：DP

该问题求最优解，且有最优子结构

ps:
动态规划的的四个解题步骤是：

- 定义子问题
- 写出子问题的递推关系
- 确定 DP 数组的计算顺序
- 空间优化（可选）

```js
var rob = function (nums) {
  const len = nums.length
  if (len < 2) return nums?.[0] || 0

  let maxAtTwoBefore = nums[0],
    maxAtOneBefore = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore)

    maxAtTwoBefore = maxAtOneBefore
    maxAtOneBefore = maxAtCurrent
  }

  return maxAtOneBefore
}
```

#### 算法复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)
  &nbsp;
