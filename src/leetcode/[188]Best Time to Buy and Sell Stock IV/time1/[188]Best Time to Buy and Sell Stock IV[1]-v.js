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
  const len = prices.length
  //合并 n 个上升区间，找 k 个最大值
  if (k == 0) return 0

  if (k > len / 2) {
    let profit = 0
    for (let i = 1; i < len; i++)
      profit = profit + Math.max(0, prices[i] - prices[i - 1])
    return profit
  }

  //交易的状态位
  const tradeTatus = Array.from({ length: k * 2 }, (v, i) =>
    i % 2 ? 0 : -prices[0]
  )

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < tradeTatus.length; j++) {
      let curProfit = -prices[i]
      if (j % 2) curProfit = tradeTatus[j - 1] + prices[i]
      else if (j !== 0) curProfit = tradeTatus[j - 1] - prices[i]

      tradeTatus[j] = Math.max(tradeTatus[j], curProfit)
    }
  }
  return tradeTatus[tradeTatus.length - 1]
}
// @lc code=end
