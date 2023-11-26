/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map()
  map.set(0, 1)
  let count = 0,
    pre = 0

  for (const x of nums) {
    pre += x

    if (map.has(pre - k)) {
      count += map.get(pre - k)
    }

    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1)
    } else {
      map.set(pre, 1)
    }
  }

  return count
}
// @lc code=end
