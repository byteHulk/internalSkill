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
  // dp[i] = nums[i]之前所能到达的最远距离
  let maxJumpLength = 0

  for (let i in nums) {
    if (i > maxJumpLength) return false

    maxJumpLength = Math.max(maxJumpLength, Number(i) + nums[i])
  }

  return true
}
// @lc code=end
