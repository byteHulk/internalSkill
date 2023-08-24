/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length

  let max = (start = 0),
    visited = {}

  for (let i in s) {
    if (s[i] in visited) {
      start = Math.max(visited[s[i]] + 1, start)
    }

    visited[s[i]] = Number(i)

    max = Math.max(i - start + 1, max)
  }

  return max
}
// @lc code=end
lengthOfLongestSubstring("abba")