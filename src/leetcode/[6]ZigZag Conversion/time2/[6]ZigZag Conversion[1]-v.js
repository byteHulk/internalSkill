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
  if (numRows <= 1) return s

  let map = {},
    layer = 1,
    isDown = true

  for (let i of s) {
    if(layer in map) map[layer] += i
    else map[layer] = i

    if(layer === numRows) isDown = false
    else if(layer === 1) isDown = true

    layer = isDown ? ++layer : --layer
  }

  return Object.keys(map).reduce((acc,curKey) => acc + map[curKey], '')
}
// @lc code=end
