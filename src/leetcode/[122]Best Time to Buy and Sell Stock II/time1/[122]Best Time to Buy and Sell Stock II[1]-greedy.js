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
  const len = prices.length
  let ans = 0

  for(let i = 1;i < len;i++){
    ans += Math.max(0,prices[i] - prices[i - 1])
  }
  return ans
}
// @lc code=end
