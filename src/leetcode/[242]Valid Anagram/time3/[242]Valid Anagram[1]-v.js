/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sMap = s
    .split('')
    .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})
  let count = Object.keys(sMap).length

  for (let i of t) {
    if(!(i in sMap) || sMap[i] === 0) return false
    if(sMap[i] > 0) sMap[i]--
    if(sMap[i] === 0) count--
  }

  return count === 0
}
// @lc code=end
