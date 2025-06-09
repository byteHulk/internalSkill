/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  backtrack(nums, [], Array(nums.length).fill(false), result);

  return result;
};

function backtrack(nums, path, used, res) {
  // 终止条件
  if (path.length === nums.length) {
    // 数组引用要深拷贝
    res.push(Array.from(path));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    path.push(nums[i]);
    used[i] = true;
    backtrack(nums, path, used, res);

    path.pop();
    used[i] = false;
  }
}
// @lc code=end
