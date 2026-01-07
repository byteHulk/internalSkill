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
  let mp = m - 1,
    np = n - 1,
    tail = m + n - 1;

  while (np >= 0) {
    if (mp >= 0 && nums1[mp] > nums2[np]) {
      nums1[tail--] = nums1[mp--];
    } else {
      nums1[tail--] = nums2[np--];
    }
  }
};
// @lc code=end
