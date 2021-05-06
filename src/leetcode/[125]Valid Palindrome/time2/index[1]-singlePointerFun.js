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
    //1.filter out invaild char  2.forwards backwards  compare
    const newStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    for(let i = 0;i < newStr.length;i++){
      if(newStr[i] !== newStr[newStr.length - i - 1]) return false
    }
    return true
  }
  // @lc code=end
  
  // @Time complexity O(n)
  // @Spatial complexity O(1)
  