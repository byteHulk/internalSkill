/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const len = nums.length
  const [result, stack] = [new Array(len).fill(-1), []]

  for (let i = 0; i < len * 2 - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]) {
      result[stack[stack.length - 1]] = nums[i % len]
      stack.pop()
    }
    stack.push(i % len)
  }

  return result
}
// @lc code=end
