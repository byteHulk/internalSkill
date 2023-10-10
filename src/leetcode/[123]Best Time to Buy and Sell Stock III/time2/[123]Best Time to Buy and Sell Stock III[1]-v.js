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
var maxProfit = function (prices, tradeCount = 2) {
  // 由于最多只能做两次交易，所以在一天结束后，可能有一下五种状态：
  // 1.未完成任何操作
  // 2.只进行过一次买操作
  // 3.只进行一次买卖操作，即完成了一笔交易
  // 4.在完成了一笔交易的前提下，进行了第二次买操作
  // 5.完成了全部两笔交易
  // 由于第一状态利润为 0 ，所以我们不做记录
  const len = prices.length

  const buy = Array(tradeCount + 1).fill(Number.MIN_SAFE_INTEGER)
  const sell = Array(tradeCount + 1).fill(0)

  for (let price of prices) {
    for (let j = 1; j <= tradeCount; j++) {
      buy[j] = Math.max(buy[j], sell[j - 1] - price)
      sell[j] = Math.max(sell[j], buy[j] + price)
    }
  }

  return sell[tradeCount]
}
// @lc code=end
