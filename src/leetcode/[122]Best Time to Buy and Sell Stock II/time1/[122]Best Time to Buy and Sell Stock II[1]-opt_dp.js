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
  let dp0 = 0, dp1 = -prices[0]

  for (let i = 1; i < len; ++i) {
    dp0 = Math.max(dp0,dp1 + prices[i])
    dp1 = Math.max(dp1,dp0 - prices[i])
  }

  return dp0
}
// @lc code=end
