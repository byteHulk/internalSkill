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
  dp[1] = Math.max(nums[0],nums[1])

  for(let i = 2;i < len;i++){
    dp[i] = Math.max(nums[i] + dp[i - 2],dp[i - 1])
  }

  return dp[len - 1]
}
// @lc code=end
