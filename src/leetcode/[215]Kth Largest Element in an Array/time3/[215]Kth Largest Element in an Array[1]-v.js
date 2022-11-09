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
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
  }

  const quickSelect = (arr, k) => {
    const q = getRandomInt(0, arr.length - 1)
    let lesser = [],
      greater = [],
      mid = [],
      pivot = arr[q]

    for (let item of arr) {
      if (item < pivot) lesser.push(item)
      else if (item > pivot) greater.push(item)
      else if (item === pivot) mid.push(item)
    }
    
    if (greater.length >= k) pivot = quickSelect(greater, k)
    else if(greater.length + mid.length < k) pivot = quickSelect(lesser, k - greater.length - mid.length)

    return pivot
  }

  return quickSelect(nums, k)
}
// @lc code=end
