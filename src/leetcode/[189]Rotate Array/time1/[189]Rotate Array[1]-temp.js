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
var rotate = function (nums, k) {
  let len = nums.length
  let count = 0
  let start = 0

  while (count !== len) {
    let current = start
    let prev = nums[start]
    do {
      const next = (current + k) % len
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
      count++
    } while (start !== current)
    start++
  }
}
// @lc code=end
