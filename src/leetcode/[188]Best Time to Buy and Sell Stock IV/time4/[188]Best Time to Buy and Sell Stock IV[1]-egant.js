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
  const buys = Array.from({ length: k }).fill(-prices[0])
  const sells = Array.from({ length: k }).fill(0)

  for (let price of prices) {
    for (let i = 0; i < k; i++) {
      buys[i] = Math.max((i ? sells[i - 1] : 0) - price, buys[i])
      sells[i] = Math.max(buys[i] + price, sells[i])
    }
  }

  return sells[k - 1]
}
// @lc code=end
