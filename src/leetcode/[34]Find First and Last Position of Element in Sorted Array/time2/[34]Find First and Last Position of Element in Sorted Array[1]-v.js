/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res1 = (res2 = -1)

  for (let i in nums) {
    if (nums[i] === target) {
      if (res1 === -1) (res1 = i), (res2 = i)
      else res2 = i
    }
  }

  return [res1, res2]
}
// @lc code=end
