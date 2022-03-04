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
  let res = []

  nums1.forEach((ele) => {
    let curIndex = nums2.findIndex((e) => e === ele)
    if (curIndex === -1) {
      res.push(-1)
      return
    }
    curIndex = nums2.findIndex((e,i) => i > curIndex && e > ele)
    if (curIndex === -1) {
        res.push(-1)
        return
      }else{
        res.push(nums2[curIndex]) 
      }
  })
  return res
}
// @lc code=end
