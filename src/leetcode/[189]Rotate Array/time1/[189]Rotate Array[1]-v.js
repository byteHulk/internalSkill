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
var rotate = function(nums, k) {
    let len = nums.length
  for (let i = 0; i < k; i++) {
    const rEle = nums[nums.length - 1]
    //除了0元素，整体右移一个位置
    for (let r = len - 1; r > 0; r--) {
      nums[r] = nums[r - 1]
    }
    nums[0] = rEle
  }
};
// @lc code=end