/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] K-th Smallest in Lexicographical Order
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  arr.sort((a, b) => (b.toString() < a.toString() ? 1 : -1));
  return arr[k - 1];
};
// @lc code=end
