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
  const helper = (i) => {
    if (i === len - 1) return true
    if( i >= len || nums[i] === 0) return false

    const curCount = nums[i]
    const jumpArr = Array.from({ length: curCount }, (v, index) => helper(i + index + 1))

    return jumpArr?.some(v => v)
  }

  return helper(0)
}
// @lc code=end
