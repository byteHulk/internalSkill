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
  if (nums == null || nums.length == 0) return
  nums.sort((a,b) => b ? 0 :-1)
}
// @lc code=end