/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let sorted = Array.from({ length: m + n }).fill(0)
  let mp = (np = cp = 0)

  while (cp < m + n) {
    if(mp === m){
      sorted[cp] = nums2[np++]
    }else if(np === n){
      sorted[cp] = nums1[mp++]
    }else if (nums1[mp] < nums2[np]) {
      sorted[cp] = nums1[mp++]
    } else {
      sorted[cp] = nums2[np++]
    }
    cp++
  }

  for(let i in sorted){
    nums1[i] = sorted[i]
  }
}
// @lc code=end
