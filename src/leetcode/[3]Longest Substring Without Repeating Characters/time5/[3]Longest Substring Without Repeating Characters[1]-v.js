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
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length

    let visited = {},
      max = (start = 0)
  
  
      for(let i in s){
        const cur = s[i]

        if(cur in visited){
            start = Math.max(visited[cur] + 1,start)
        }

        visited[cur] = (i)

        max = Math.max(i - start + 1, max)
      }

      return max
};
// @lc code=end
