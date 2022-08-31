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
  let max = 0

  for (let i = 1; i < prices.length; i++) {
    max += Math.max(0, prices[i] - prices[i - 1])
  }

  return max
}
// @lc code=end
