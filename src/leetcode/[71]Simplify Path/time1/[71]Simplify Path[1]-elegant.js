/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = []
  let pathArr = path.split('/')

  for (let p of pathArr) {
    if (p === '.' || p === '') continue
    if (p === '..') stack.pop()
    else stack.push(p)
  }
  
  return '/' + stack.join('/')

}
// @lc code=end
