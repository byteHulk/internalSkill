/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (!nums.length) return 0
  let dp = []
  for (var i = 0; i < nums.length; i++) {
    dp.push(1)
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    // max = Math.max(dp[i], max)
  }
  return Math.max(...dp);
}
// @lc code=end
