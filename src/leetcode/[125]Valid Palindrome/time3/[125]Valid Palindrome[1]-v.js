/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //自顶向下编程 主干逻辑(新闻稿方式)
  //1.filter out invalid char 2.reverse and compare

  let filted = s.replace(/[^0-9a-z]/gi, '').toLowerCase()

  let reversed = filted.split('').reverse().join('')

  let isEqual = filted === reversed

  return isEqual
}
// @lc code=end
