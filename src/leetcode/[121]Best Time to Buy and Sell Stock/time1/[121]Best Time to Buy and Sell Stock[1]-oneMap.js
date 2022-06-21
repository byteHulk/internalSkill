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
    let maxPf = 0
    for(let price of prices){
        if(price < minPrice) minPrice = price
        else if(price - minPrice > maxPf) maxPf = price - minPrice
    }
    return maxPf
};
// @lc code=end
console.log(maxProfit([3,3,5,0,0,3,1,4]))