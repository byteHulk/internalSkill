/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //i + k mode len
  let len = nums.length
  let arr = Array(len)

  for (let i = 0; i < len; i++) {
    arr[(i + k) % len] = nums[i]
  }
  for (let i = 0; i < len; ++i) {
    nums[i] = arr[i]
  }
}
// @lc code=end
