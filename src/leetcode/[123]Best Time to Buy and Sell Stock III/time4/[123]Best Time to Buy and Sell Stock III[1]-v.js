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
  let [buy1, sell1, buy2, sell2] = [-prices[0], 0, -prices[0], 0];

  for (let price of prices) {
    buy1 = Math.max(-price,buy1)
    sell1 = Math.max(buy1 + price,sell1)
    buy2 = Math.max(sell1 - price,buy2)
    sell2 = Math.max(buy2 + price,sell2)
  }

  return sell2;
};
// @lc code=end
