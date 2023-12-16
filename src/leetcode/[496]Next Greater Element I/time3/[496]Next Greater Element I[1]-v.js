/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = nums2.reduce((acc, cur, index) => ((acc[cur] = index), acc), {})
  let ans = []
  nums1.forEach((cur) => {
    let index = map[cur] + 1

    while (index < nums2.length) {
      if (nums2[index] > cur) {
        ans.push(nums2[index])
        return
      }
      index++
    }

    ans.push(-1)
  })

  return ans
}
// @lc code=end
