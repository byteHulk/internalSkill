/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 在 v 的基础上做空间优化, 只留必须的四个变量

  const len = prices.length

  let [buy1, sell1, buy2, sell2] = [-prices[0], 0, -prices[0], 0]

  for (let i = 1; i < len; i++) {
    buy1 = Math.max(buy1, -prices[i])
    sell1 = Math.max(sell1, buy1 + prices[i])
    buy2 = Math.max(buy2, sell1 - prices[i])
    sell2 = Math.max(sell2, buy2 + prices[i])
  }

  return sell2
}
// @lc code=end
