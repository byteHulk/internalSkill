/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length
  let sorted = new Array(len1 + len2).fill(0)
  let p1 = 0
  let p2 = 0
  let cp = 0

  while (cp < len1 + len2) {
    if (p1 === len1) {
      sorted[cp++] = nums2[p2++]
    } else if (p2 === len2) {
      sorted[cp++] = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      sorted[cp++] = nums1[p1++]
    } else {
      sorted[cp++] = nums2[p2++]
    }
  }

  return (len1 + len2) % 2 === 0
    ? (sorted[Math.floor((len1 + len2) / 2)] +
        sorted[Math.floor((len1 + len2) / 2) - 1]) /
        2
    : sorted[Math.floor((len1 + len2) / 2)]
}
// @lc code=end