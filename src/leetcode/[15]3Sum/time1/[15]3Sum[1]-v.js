/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];

  const len = nums.length;
  if (len < 3) return result;

  nums = nums.toSorted((a, b) => a - b);

  let target = 0;

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > target) break;

    // 跳过重复数字
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1,
      k = len - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};
// @lc code=end
