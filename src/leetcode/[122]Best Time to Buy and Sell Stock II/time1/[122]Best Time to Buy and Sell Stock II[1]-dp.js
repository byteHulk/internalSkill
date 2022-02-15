/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length

  //dp[i][0] 表示 i 天 手里没有股票时的最大利润
  //dp[i][i] 表示 i 天 手里有股票时的最大利润
  const dp = Array.from({ length: len }, () => Array(2).fill(0))

  //初始化边界条件
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < len; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0],dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1],dp[i - 1][0] - prices[i])
  }

  return dp[len - 1][0]
}
// @lc code=end
