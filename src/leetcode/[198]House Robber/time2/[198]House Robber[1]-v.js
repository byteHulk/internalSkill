/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length
  if (len < 2) return nums?.[0] || 0

  let maxAtTwoBefore = nums[0],
    maxAtOneBefore = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore)

    maxAtTwoBefore = maxAtOneBefore
    maxAtOneBefore = maxAtCurrent
  }

  return maxAtOneBefore
}
// @lc code=end
