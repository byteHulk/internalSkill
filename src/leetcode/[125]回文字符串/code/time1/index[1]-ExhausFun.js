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

  let filteredS = s.replace(/[^a-z0-9]/ig,'').toLowerCase()

  let reversedS = filteredS.split('').reverse().join('')

  let isEqual = filteredS === reversedS

  return isEqual
}
// @lc code=end

// @Time complexity O(n)
// @Spatial complexity O(n)