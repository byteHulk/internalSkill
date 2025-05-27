/*
 * @lc app=leetcode.cn id=2894 lang=javascript
 *
 * [2894] 分类求和并作差
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i % m ? +i : -i
  }

  return result;
};
// @lc code=end
