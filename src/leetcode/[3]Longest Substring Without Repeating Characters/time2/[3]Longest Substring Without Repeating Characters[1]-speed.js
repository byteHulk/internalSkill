/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length,
    maxStr = '',
    maxLen = 0,
    tmpStr,
    posIndex

  for (let i = 0; i < len; i++) {
    tmpStr = s[i]
    posIndex = maxStr.indexOf(tmpStr)
    
    if(posIndex > -1){
      maxStr = maxStr.substring(posIndex + 1)
    }

    maxStr += tmpStr;
    maxLen = Math.max(maxStr.length,maxLen)
  }

  return maxLen
}
// @lc code=end
