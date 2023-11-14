/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length
  let k = 0
  for (let i = 0; i < len; i++) {
    if (i > k) return false
    k = Math.max(k, i + nums[i])
  }
  return true
}
// @lc code=end
