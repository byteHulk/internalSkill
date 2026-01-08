/*
 * @lc app=leetcode.cn id=2894 lang=javascript
 *
 * [2894] Divisible and Non-divisible Sums Difference
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let result = 0;

  let num1 = 0,
    num2 = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      num2 += i;
    } else {
      num1 += i;
    }
  }

  return num1 - num2;
};
// @lc code=end
