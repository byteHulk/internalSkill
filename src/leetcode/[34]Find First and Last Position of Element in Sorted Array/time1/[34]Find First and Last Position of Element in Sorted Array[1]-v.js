/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const [N, T] = [nums, target]
  //binary search
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1
      if (arr[mid] < target) left = mid + 1
      else right = mid - 1
    }
    return left
  }
  let Tleft = find(T, N)
  if (N[Tleft] !== T) return [-1, -1]
  return [Tleft, find(T + 1, N, Tleft) - 1]
}
// @lc code=end
