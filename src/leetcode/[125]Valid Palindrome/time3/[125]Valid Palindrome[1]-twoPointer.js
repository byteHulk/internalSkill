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
  //1.two pointer to center 2.skip invalid chat and compare 3.too pointer meet true

  const len = s.length

  for (let i = 0, j = len - 1; i < j; ) {
    const iIsValid = /[0-9a-z]/gi.test(s[i])
    const jIsValid = /[0-9a-z]/gi.test(s[j])

    if (!iIsValid) {
      i++
      continue
    } else if (!jIsValid) {
      j--
      continue
    } else {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
      i++
      j--
    }
  }

  return true
}
// @lc code=end
