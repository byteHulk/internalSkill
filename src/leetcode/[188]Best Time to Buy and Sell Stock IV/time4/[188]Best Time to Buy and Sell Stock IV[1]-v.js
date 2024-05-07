/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dp = Array.from({ length: k + 1 }, (_, i) => [-Infinity, 0])

  for (const price of prices) {
    for (let i = 1; i <= k; i++) {
        dp[i][0] = Math.max(dp[i - 1][1] - price,dp[i][0])
        dp[i][1] = Math.max(dp[i][0] + price,dp[i][1])
    }
  }
  return dp[k][1]
}
// @lc code=end
