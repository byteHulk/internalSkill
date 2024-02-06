/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const sLen = s.length,
    tLen = t.length

  const map = t
    .split('')
    .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})

  let count = Object.keys(map).length

  let left = 0,
    right = 0,
    min = ''

  while (right <= sLen) {
    if (count === 0) {
      let cur = s[left]

      if (cur in map) map[cur]++

      if (map[cur] > 0) count++

      let tmp = s.slice(left, right)

      if (min === '') min = tmp
      else min = tmp.length < min.length ? tmp : min

      left++
    } else {
      let cur = s[right]

      if (cur in map) map[cur]--

      if (map[cur] === 0) count--

      right++
    }
  }

  return min
}
// @lc code=end
