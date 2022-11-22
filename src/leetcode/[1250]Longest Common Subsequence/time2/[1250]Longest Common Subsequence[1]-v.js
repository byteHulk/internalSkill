/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = []
    let m = text1.length
    let n = text2.length
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0)
    }
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if(text1.charAt(i - 1) !== text2.charAt(j - 1)){
          dp[i][j] = Math.max(dp[i - 1][j],dp[i][j - 1])
        }else{
          dp[i][j] = dp[i - 1][j - 1] + 1
        }
      }
    }
    return dp[m][n]
};
// @lc code=end
