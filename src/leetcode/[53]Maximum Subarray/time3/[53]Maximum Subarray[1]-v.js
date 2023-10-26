/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0,
    res = nums[0]

  for (let num of nums) {
    pre = Math.max(pre + num, num)
    res = Math.max(res, pre)
  }

  return res
}
// @lc code=end
