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
  let [buy1, sell1, buy2, sell2] = [-prices[0], 0, -prices[0], 0]

  for (let price of prices) {
    buy1 = Math.max(buy1, -price)
    sell1 = Math.max(sell1, buy1 + price)
    buy2 = Math.max(buy2, sell1 - price)
    sell2 = Math.max(sell2, buy2 + price)
  }

  return sell2
}
// @lc code=end
