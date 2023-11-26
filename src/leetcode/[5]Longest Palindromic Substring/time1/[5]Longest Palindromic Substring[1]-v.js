/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s
  let maxLength = 0,
    maxStr = ""

  const palindrome = (s, l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }

    return s.slice(l + 1, r)
  }
  for (let i = 0; i < s.length; i++) {
    let str1 = palindrome(s, i, i)
    let str2 = palindrome(s, i, i + 1)

    if (str1.length > maxLength) {
      maxLength = str1.length
      maxStr = str1
    }
    if (str2.length > maxLength) {
      maxLength = str2.length
      maxStr = str2
    }
  }

  return maxStr
}
// @lc code=end
