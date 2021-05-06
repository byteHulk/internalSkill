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
  for(let i = 0,j = 0;j < nums.length;){
    if(nums[j]){
      [nums[i],nums[j]] = [nums[j],nums[i]]
      i++
    }
    j++
  }
}
// @lc code=end
