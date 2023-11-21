/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n
  let [f1, f2, f3] = [1, 2, 3]

  for (let i = 3; i <= n; i++) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }

  return f3
}
// @lc code=end
