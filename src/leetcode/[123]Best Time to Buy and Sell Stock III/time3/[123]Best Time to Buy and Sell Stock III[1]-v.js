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
  let [buy0, sell0, buy1, sell1] = [-prices[0], 0, -prices[0], 0]

  for (let price of prices) {
    buy0 = Math.max(-price,buy0)
    sell0 = Math.max(buy0 + price,sell0)
    buy1 = Math.max(sell0 - price,buy1)
    sell1 = Math.max(buy1 + price,sell1)
  }

  return sell1
}
// var maxProfit = function (prices) {
//   let [buy0, sell0, buy1, sell1] = [-prices[0], 0, -prices[0], 0]

//   for (let price of prices) {
//     buy0 = Math.max(buy0, -price)
//     sell0 = Math.max(sell0, buy0 + price)
//     buy1 = Math.max(buy1, sell0 - price)
//     sell1 = Math.max(sell1, buy1 + price)
//   }

//   return sell1
// }
// @lc code=end
