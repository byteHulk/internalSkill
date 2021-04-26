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

  let n = 0

  for(let i = 0; i< nums.length;i++){
    if(nums[i] === 0){
      nums.splice(i,1)
      i--
      n++
    }
  }
  while(n > 0){
    nums.push(0)
    n--
  }
}
// @lc code=end
