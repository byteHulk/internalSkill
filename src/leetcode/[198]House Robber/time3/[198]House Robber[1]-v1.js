/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length
  if (len < 2) return nums?.[0] || 0

  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    const maxAtCurrent = Math.max(nums[i] + dp[0], dp[1])

    dp[0] = dp[1]
    dp[1] = maxAtCurrent
  }

  return dp[1]
}
// @lc code=end
