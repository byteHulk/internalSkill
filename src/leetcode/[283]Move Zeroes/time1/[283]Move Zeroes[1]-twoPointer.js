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
  //1.left pointer points head , right pointer points tail
  //2.swap two ele

  //l = 0,r = !0
  //l = !0,r = 0
  //l = !0,r = !0

  let left = 0,
    right = 0

  while (right < nums.length) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }
}
// @lc code=end
