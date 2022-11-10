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
  if (k === 0) return []
  if (k >= arr.length) return arr

  const quickSort = (arr) => {
    let lesser = (greater = []),
      pivot = arr[0]

    for (let i = 1; i < arr.length; i++) {
      const cur = arr[i]
      if (cur > pivot) greater.push(cur)
      else lesser.push(cur)
    }

    return quickSort(lesser).concat(
      pivot,
      greater.slice(0, lesser.length - 1 - k)
    )
  }

  return quickSort(arr).slice(0, k)
}
// @lc code=end
