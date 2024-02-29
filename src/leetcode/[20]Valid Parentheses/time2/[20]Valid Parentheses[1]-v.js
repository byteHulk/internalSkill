/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1.build parent map[start_symbol: close_symbol] 2.push start symbol, pop close symbol 3. check stack length

  if (!s || s % 2) return false

  let stack = [],
    map = {
      '(': ')',
      '{': '}',
      '[': ']',
    }

  for (let i of s) {
    if (i in map) stack.push(map[i])
    else if (i !== stack.pop()) return false
  }

  return !stack.length
}
// @lc code=end
