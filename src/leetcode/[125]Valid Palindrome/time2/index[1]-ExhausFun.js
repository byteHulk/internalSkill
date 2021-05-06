/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //自顶向下编程 主干逻辑(新闻稿方式)
  //1.filter out invalid char 2.reverse and compare

  let filted = s.replace(/[^0-9a-z]/ig,'').toLowerCase()

  let reversed = filted.split('').reverse().join('')

  let isEqual = filted === reversed

  return isEqual
  
}
// @lc code=end

// @Time complexity O(n)
// @Spatial complexity O(n)