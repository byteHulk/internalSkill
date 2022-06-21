/*
 * @Author: HuangBoWen
 * @Date: 2022-03-26 20:24:57
 * @LastEditors: HuangBoWen
 * @LastEditTime: 2022-03-26 20:58:24
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
  // TODO 边界条件

  let max = (l = r = 0)
  let map = {}

  // 枚举左指针
  while (l < s.length) {
    map = {}
    while (r < s.length - l) {
      if (s[l + r] in map) {
        break
      } else {
        map[s[l + r]] = 0
      }
      max = Math.max(Object.keys(map).length, max)

      r++
    }
    r = 0
    l++
  }

  return max
}
// @lc code=end
