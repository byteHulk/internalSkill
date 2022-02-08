/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const sLen = s.length
  if (sLen < 2) return sLen

  const dp = Array.from({ length: sLen }, () =>
    Array.from({ length: sLen }, () => 0)
  )

  for (let i = sLen - 1; i >= 0; i--) {
    dp[i][i] = 1
    for (let j = i + 1; j < sLen; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
    }
  }

  return dp[0][sLen - 1]
}
// @lc code=end
