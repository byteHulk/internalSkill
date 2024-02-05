/*
 * @lc app=leetcode.cn id=809 lang=javascript
 *
 * [809] Expressive Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  const sMap = s
    .split('')
    .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})

  let count = 0
console.log(sMap,'sMap')
  for (let word of words) {
    // const wordMap = word
    //   .split('')
    //   .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})
    let canExpand = false
    for (let i of word) {
      // 目标字符串该字母无法扩张
      if (!sMap[i] || sMap[i] < 3) {
        canExpand = false
        break
      }
      canExpand = true
    }
    if (canExpand) count++
  }

  return count
}
// @lc code=end
