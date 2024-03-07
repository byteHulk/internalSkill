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
  const len = nums.length
  if (len < 2) return nums

  let left = right = 0

  while(right < len){
    if(nums[right]){
      [nums[left],nums[right]] = [nums[right],nums[left]]
      left++
    }
    right++
  }
}
// @lc code=end
