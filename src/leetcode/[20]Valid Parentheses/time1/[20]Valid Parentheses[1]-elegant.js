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
  if (s.length % 2) return false

  let map = {
      '(': ')',
      '{': '}',
      '[': ']',
    },
    stack = []

  for (let c of s) {
    if (c in map) stack.push(map[c])
    else if (stack.pop() !== c) return false
  }

  return !stack.length
}
// @lc code=end
