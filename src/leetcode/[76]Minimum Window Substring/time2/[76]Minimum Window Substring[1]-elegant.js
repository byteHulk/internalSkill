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
  // if (t.length > s.length) return ""
  // if (t.length === 1) return s.includes(t) ? t : ""

  const tMap = t
    .split("")
    .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})

  let count = Object.keys(tMap).length

  let left = 0,
    right = 0,
    resultStr = ""

  while (right <= s.length) {
    if (count === 0) {
      let current = s[left]

      if (current in tMap) tMap[current]++

      if (tMap[current] > 0) count++

      let tmp = s.slice(left, right)

      if (resultStr === "") resultStr = tmp
      else resultStr = tmp.length < resultStr.length ? tmp : resultStr

      left++
    } else {
      let current = s[right]

      if (current in tMap) tMap[current]--

      if (tMap[current] === 0) count--

      right++
    }
  }

  return resultStr
}
// @lc code=end
