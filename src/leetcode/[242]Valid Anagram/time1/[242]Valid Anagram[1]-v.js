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
  if (s.length !== t.length) return false
  const map = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]]--
    else return false
  }

  return true
}
// @lc code=end