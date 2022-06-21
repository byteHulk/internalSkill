/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []
  permute([], s,result)
  return result.map((x) => x.join('.'))
}

function permute(arr, str,result) {
  if (arr.length === 3) {
    if (isValid(str)) result.push([...arr, str])
    return
  }

  for (let i = 1; i < 4; i++) {
    let subStr = str.slice(0, i)
    if (!isValid(subStr)) continue
    permute([...arr, subStr], str.slice(i),result)
  }
}

function isValid(str) {
  if (+str > 255 || !str.length) return false
  if (str.length >= 2 && str[0] === '0') return false
  return true
}
// @lc code=end
