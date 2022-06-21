/*
 * @Author: HuangBoWen
 * @Date: 2022-03-26 20:24:57
 * @LastEditors: HuangBoWen
 * @LastEditTime: 2022-03-26 21:19:36
 * @Description:
 */
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
  let visited = new Map()

  let max = (start = 0)

  for (let i = 0; i < s.length; i++) {
    if (visited.has(s[i])) {
      start = Math.max(visited.get(s[i]) + 1, start)
    }
    visited.set(s[i], i)

    max = Math.max(i - start + 1, max)
  }

  return max
}
// @lc code=end
