/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 三种状态
  // 1.有一只股票
  // 2.未持有股票并处于交易冷冻期中
  // 3.未持有股票不处于交易冷冻期中
  const len = prices.length

  let [f1, f2, f3] = [-prices[0], 0, 0]

  for (let i = 1; i < len; i++) {
    let newf1 = Math.max(f1, f3 - prices[i])
    let newf2 = f1 + prices[i]
    let newf3 = Math.max(f2, f3)
    ;[f1, f2, f3] = [newf1, newf2, newf3]
  }

  return Math.max(f2, f3)
}
// @lc code=end
