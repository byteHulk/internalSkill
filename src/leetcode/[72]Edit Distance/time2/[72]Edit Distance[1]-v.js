/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let [len1, len2] = [word1.length, word2.length]
    //处理有字符串为空的情况
    if (!len1 || !len2) return len1 + len2
  
    //dp 方程为 word1 的前 i 位到 word2 的前 j 位的编辑距离
    let dp = Array.from({ length: word1.length + 1 }, () =>
      Array.from({ length: word2.length + 1 }, () => 0)
    )
    //处理边界情况
    for (let i = 0; i <= len1; i++) dp[i][0] = i
    for (let j = 0; j <= len2; ++j) dp[0][j] = j

    
};
// @lc code=end
