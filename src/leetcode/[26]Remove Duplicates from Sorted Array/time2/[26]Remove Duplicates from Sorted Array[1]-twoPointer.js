/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = (r = 0)

  while (r < nums.length) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r]
      l++
    }
    r++
  }

  return l
}
// @lc code=end
