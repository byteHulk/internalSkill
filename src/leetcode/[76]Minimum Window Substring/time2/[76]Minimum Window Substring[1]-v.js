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
  if (t.length > s.length) return ""
  if (t.length === 1) return s.includes(t) ? t : ""

  const stringToMap = (string) => {
    const map = new Map()
    for (let str of string) {
      if (map.has(str)) {
        map.set(str, map.get(str) + 1)
      } else {
        map.set(str, 1)
      }
    }

    return map
  }

  //   const sMap = stringToMap(s)
  const tMap = stringToMap(t)

  let left = 0,
    right = 1,
    resultStr = ""

  while (left >= s.length) {
    const curStr = s.substring(left, right)
    const curStrMap = stringToMap(curStr)

    const isEqual = true

    if (isEqual) {
      if (resultStr === "") {
        resultStr = curStr
      } else {
        resultStr = curStr.length < resultStr.length ? curStr : resultStr
      }
      left++
    } else {
      right++
    }
  }

  return resultStr
}
// @lc code=end
