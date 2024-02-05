/*
 * @lc app=leetcode.cn id=809 lang=javascript
 *
 * [809] Expressive Words
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let count = 0

  const isExpand = (s,word) => {
    let i = j = 0;

    while(i < s.length && j < word.length){
      if(s[i] !== word[j]) return false

      let ch = s[i]

      let cnti = 0

      while(i < s.length && s[i] == ch){
        ++cnti
        ++i
      }

      let cntj = 0
      while(j < word.length && word[j] == ch){
        ++cntj
        ++j
      }

      // 扩张不能减少字符
      if(cnti < cntj) return false

      if(cnti !== cntj && cnti < 3) return false
    }

    return i === s.length && j === word.length
  }

  for(let word of words){
    if(isExpand(s,word)) count++
  }

  return count
}
// @lc code=end
