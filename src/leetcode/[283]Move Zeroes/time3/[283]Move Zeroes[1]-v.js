/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length
  if (len < 2) return nums

  for (let i = 0, j = 0; j < len; ) {
    if (nums[j]) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
    }
    j++
  }
}
// @lc code=end
