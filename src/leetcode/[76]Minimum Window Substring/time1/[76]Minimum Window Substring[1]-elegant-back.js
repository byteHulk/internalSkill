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
  let left = 0,
    right = 0,
    min = ""

  let map = t
    .split("")
    .reduce((acc, cur) => ((acc[cur] = cur in acc ? acc[cur] + 1 : 1), acc), {})

  let count = Object.keys(map).length

  while (right <= s.length) {
    if (count === 0) {
      let current = s[left]

      if (current in map) map[current]++

      if (map[current] > 0) count++

      let str = s.slice(left, right)
      if (min === "") min = str
      else min = min.length < str.length ? min : str

      left++
    } else {
      let current = s[right]

      if (current in map) map[current]--

      if (map[current] === 0) count--

      right++

    }
  }

  return min
}
// @lc code=end
