/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    const len = prices.length
  
  
    let dp = Array(len)
    let max = 0
    
    dp[0] = prices[0]
    
    for(let i = 0;i < len;i++){
      dp[i] = Math.min(prices[i],dp[i - 1])
      if((prices[i] - dp[i - 1]) > max) max = prices[i] - dp[i - 1]
    }
  
    return max
  }
// @lc code=end
