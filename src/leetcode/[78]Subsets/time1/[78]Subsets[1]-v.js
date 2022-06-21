/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = []
  backtrack(nums, [], 0, result)
  return result
}

function backtrack(nums, path, start, result) {
  //没有终止条件
  //注意这里要克隆当前值保留结果
  result.push([...path])

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]) // 做出选择
    backtrack(nums, path, i + 1, result)
    path.pop()
  }
}
// @lc code=end
