/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length
  // dp[i] = nums[i]之前所能到达的最远距离

  const dp = Array.from({ length: len - 1 }, (v, i) => 0)
  dp[0] = nums[0]

  for (let i = 1; i < len; i++) {
    if (i > dp[i - 1]) return false
    dp[i] = Math.max(dp[i - 1], i + nums[i])
  }

  return true
}
// @lc code=end
