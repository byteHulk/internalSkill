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
  const binarySearch = (target, arr, left = 0, right = arr.length - 1) => {
    while (left <= right) {
      let mid = (left + right) >> 1
     if(arr[mid] < target) left = mid + 1
     else right = mid - 1
    }

    return left
  }

  const targetLeft = binarySearch(T, N)
  if (N[targetLeft] !== T) return [-1, -1]

  return [targetLeft, binarySearch(T + 1, N, targetLeft) - 1]
}
// @lc code=end
