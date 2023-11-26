/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let start = 0,
    max = 0

  for (let i in nums) {
    if (nums[i] <= nums[i - 1]) start = i

    max = Math.max(i - start + 1, max)
  }

  return max
}
// @lc code=end
