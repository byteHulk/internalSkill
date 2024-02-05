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

  const isCanExpand = (s,t) => {
    let i = j = 0

    while(i < s.length && j < t.length){
      if(s[i] !== t[j]) return false

      let char = s[i]

      let si = 0
      while(i < s.length && s[i] === char){
        si++
        i++
      }

      let ti = 0
      while(j < t.length && t[j] === char){
        ti++
        j++
      }

      if(si < ti) return false

      if(si !== ti && si < 3) return false
    }

    return i === s.length && j === t.length
  }

  for(let word of words){
    if(isCanExpand(s,word)) count++
  }

  return count

}
// @lc code=end
