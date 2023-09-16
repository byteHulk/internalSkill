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
  if (numRows === 1) return s

  let rows = new Array(numRows).fill(""),
    isDown = false,
    layer = 0

  for (let i of s) {
    rows[layer] += i

    if (layer === 0 || layer === numRows - 1) isDown = !isDown

    isDown ? layer++ : layer--
  }

  return rows.join("")
}
// @lc code=end
