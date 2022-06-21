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
  const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for (let outer = 0; outer < nums.length; outer++) {
    for (let inner = nums.length; inner > outer; inner--) {
      if (nums[inner] > nums[inner - 1]) {
        swap(nums, inner, inner - 1)
      }
    }
  }
  return nums[k - 1]
}
// @lc code=end
