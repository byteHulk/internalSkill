/*
 * @lc app=leetcode.cn id=面试题 17.14 lang=javascript
 *
 * [面试题 17.14] Smallest K LCCI
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  if(k === 0) return []
  if (k >= arr.length) return arr
  
  const quickSort = (arr,k) => {
    let len = arr.length
    if (len === 0) {
      return []
    }
    let lesser = []
    let greater = []
    let pivot = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lesser.push(arr[i])
      } else {
        greater.push(arr[i])
      }
      if(lesser.length - 1 >= k){
          break
      }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater.slice(0,lesser.length - 1 - k)))
  }
  return quickSort(arr,k).slice(0, k)
}
// @lc code=end
