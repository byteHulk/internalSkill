/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  backtrack(n, n, '', res)
  return res
}
function backtrack(l, r, s, res) {
  if (l > r) return

  if (l === 0 && r === 0) {
    res.push(s)
    return
  }

  if (l > 0) backtrack(l - 1, r, s + '(', res)
  if (r > 0) backtrack(l, r - 1, s + ')', res)
}
// @lc code=end
