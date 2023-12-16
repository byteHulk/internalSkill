/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = {},
    stack = []

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && nums2[i] >= stack[stack.length - 1]) stack.pop()
    map[nums2[i]] = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums2[i])
  }

  return Array.from({length: nums1.length},(_,i) => map[nums1[i]])
}
// @lc code=end
