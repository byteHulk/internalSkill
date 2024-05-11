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

  let [p1, p2, p3] = [-prices[0], 0, 0]

  for (let i = 1; i < len; i++) {
    let newP1 = Math.max(p1, p3 - prices[i])
    let newP2 = p1 + prices[i]
    let newP3 = Math.max(p2, p3)
    ;[p1, p2, p3] = [newP1, newP2, newP3]
  }

  return Math.max(p2, p3)
}
// @lc code=end
