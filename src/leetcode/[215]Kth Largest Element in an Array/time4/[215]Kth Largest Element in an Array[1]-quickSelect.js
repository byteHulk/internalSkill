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
  const getRandomPivot = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const quickSelect = (arr,k) => {
    let len = arr.length
    if (len === 0) {
      return []
    }
    const q = getRandomPivot(0, arr.length)

    let less = []
    let great = []
    let mid = []
    let pivot = arr[q]

    for(let item of arr){
      if(item < pivot) less.push(item)
      else if(item > pivot) great.push(item)
      else if(item === pivot) mid.push(item)
    }

    if(great.length >= k) pivot = quickSelect(great,k)
    else if(great.length + mid.length < k) pivot = quickSelect(less,k - great.length - mid.length)

  

    return pivot
  }

  return quickSelect(nums,k)
}
// @lc code=end
