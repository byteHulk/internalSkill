/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let ans = 0;
    let expired = 0;
    for (let i = 0; i < timeSeries.length; ++i) {
        if (timeSeries[i] >= expired) {
            ans += duration;
        } else {
            ans += timeSeries[i] + duration - expired;
        }
        expired = timeSeries[i] + duration;
    }
    return ans;
}
// @lc code=end
