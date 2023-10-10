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
  const buy = Array(k + 1).fill(-Infinity)
  const sell = Array(k + 1).fill(0)

  for (let price of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.max(buy[i], sell[i - 1] - price)
      sell[i] = Math.max(sell[i], buy[i] + price)
    }
  }

  return sell[k]
}
// @lc code=end
