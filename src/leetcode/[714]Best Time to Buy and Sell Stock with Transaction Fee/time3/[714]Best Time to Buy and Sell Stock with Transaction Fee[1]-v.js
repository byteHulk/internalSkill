/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let len = prices.length;

  let [buy, sell] = [-prices[0], 0];

  for (let i = 1; i < len; i++) {
    [buy, sell] = [
      Math.max(buy, sell - prices[i]),
      Math.max(sell, buy + prices[i] - fee),
    ];
  }

  return sell;
};
// @lc code=end
