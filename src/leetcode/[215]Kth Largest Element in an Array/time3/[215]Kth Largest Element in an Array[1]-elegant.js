/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const qSort = (arr) => {
    let len = arr.length
    if (len === 0) {
      return []
    }
    let lesser = []
    let greater = []
    let pivot = arr[0]
    for (let i = 1; i < len; ++i) {
      if (arr[i] < pivot) {
        lesser.push(arr[i])
      } else {
        greater.push(arr[i])
      }
    }
    return qSort(greater).concat(pivot, qSort(lesser))
  }

  return qSort(nums)[k - 1]
}
// @lc code=end
