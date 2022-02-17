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
  // 由于最多只能做两次交易，所以在一天结束后，可能有一下五种状态：
  // 1.未完成任何操作
  // 2.只进行过一次买操作
  // 3.只进行一次买卖操作，即完成了一笔交易
  // 4.在完成了一笔交易的前提下，进行了第二次买操作
  // 5.完成了全部两笔交易
  // 由于第一状态利润为 0 ，所以我们不做记录

  const len = prices.length

  let [buy1, sell1, buy2, sell2] = [-prices[0], 0, -prices[0], 0]

  for (let i = 1; i < len; i++) {
    buy1 = Math.max(buy1,-prices[i])
    sell1 = Math.max(sell1, buy1 + prices[i])
    buy2 = Math.max(buy2, sell1 - prices[i])
    sell2 = Math.max(sell2,buy2 + prices[i])
  }

  return sell2
}
// @lc code=end
