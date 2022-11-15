/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
  }

  const quickSort = (arr) => {
    let len = arr.length
    if (len < 2) {
      return arr
    }

    let lesser = []
    let greater = []
    let randomIndex = getRandomInt(0,len - 1)
    let pivot = arr[randomIndex]

    const tmp = arr[0]
    arr[0] = arr[randomIndex]
    arr[randomIndex] = tmp

    for (let i = 1; i < len; i++) {
      if (arr[i] < pivot) lesser.push(arr[i])
      else greater.push(arr[i])
    }

    return quickSort(lesser).concat(pivot, quickSort(greater))
  }

  return quickSort(nums)
}
// @lc code=end
