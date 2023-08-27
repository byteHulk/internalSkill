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
  let left = (right = 0),
    min = ""

  let map = t
    .split("")
    .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})

  let count = Object.keys(map).length

  while (right <= s.length) {
    if (count === 0) {
      let current = s[left]

      if(current in map) map[current]++

      if(map[current] > 0) count++

      let tmp = s.slice(left, right)

      if (min === "") min = tmp
      else min = tmp.length < min.length ? tmp : min

      left++
    } else {
      let current = s[right]

      if(current in map) map[current]--

      if(map[current] === 0) count--

      right++
    }
  }

  return min
}
// @lc code=end
