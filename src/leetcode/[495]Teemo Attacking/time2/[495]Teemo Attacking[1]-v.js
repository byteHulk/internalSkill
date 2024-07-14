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
  let count = 0,
    expired = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] >= expired) {
      count += duration;
    } else {
      count += timeSeries[i] - expired + duration;
    }

    expired = timeSeries[i] + duration;
  }

  return count;
};
// @lc code=end
