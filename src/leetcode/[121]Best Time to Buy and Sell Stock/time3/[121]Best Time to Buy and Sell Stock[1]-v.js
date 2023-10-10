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
var maxProfit = function(prices) {
    let minPrice = Infinity
    let max = 0

    for(let price of prices){
        if(price < minPrice) minPrice = price
        else if(price - minPrice > max) max = price - minPrice
    }

    return max
};
// @lc code=end
