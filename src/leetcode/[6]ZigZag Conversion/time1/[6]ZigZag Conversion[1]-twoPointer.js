/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s

  const rows = new Array(numRows).fill("")
  let isDown = false

  for (let i = 0, j = 0; i < s.length; i++) {
    rows[j] += s[i]
    if(j === 0 || j === numRows - 1) isDown = !isDown
    isDown ? j++ : j--
  }
  return rows.join("")
}
// @lc code=end
