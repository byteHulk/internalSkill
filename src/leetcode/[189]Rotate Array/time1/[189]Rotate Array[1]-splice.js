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
  let len = nums.length
  if (len === k) return
  let n = len > k ? len - k : k % len
  let spNums = nums.splice(n)
  nums.splice(0, 0, ...spNums)
}
// @lc code=end
