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
  let max = (l = r = 0),
    len = s.length,
    map = {}

  //左指针逻辑
  while(l < len){
    map = {}
    //移动右指针逻辑
    while(r < len - l){
      const cur = s[l + r]

      if(!(cur in map)) break
      else map[cur] = 0

      max = Math.max(Object.keys(map).length,max)
      
      r++

    }

    r = 0
    l++
  }

  return max
}
// @lc code=end
