/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0]

  let map = {};
  let mid = nums.length / 2;

  for (let num of nums) {
    if (num in map) map[num]++;
    else map[num] = 1;
    if (map[num] > mid) return num
  }

};
// @lc code=end
