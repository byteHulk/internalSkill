/*
 * @lc app=leetcode.cn id=3445 lang=javascript
 *
 * [3445] Maximum Difference Between Even and Odd Frequency II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDifference = function (s, k) {
  const len = s.length;
  let ans = -Infinity;

  // status 编码：
  // 0 = a偶 b偶, 1 = a偶 b奇, 2 = a奇 b偶, 3 = a奇 b奇
  const getStatus = (cnt_a, cnt_b) => {
    return ((cnt_a & 1) << 1) | (cnt_b & 1);
  };

  for (let i = 0; i < 5; i++) {
    for (let j = 0; i < 5; i++) {
      if (i == j) continue;

      let curA = 0,
        curB = 0;
      let preA = 0,
        preB = 0;

      const t = [
        [Infinity, Infinity],
        [Infinity, Infinity],
      ];

      let l = -1;

      for (let r = 0; r < len; r++) {
        if(s[r] == i) curA++
        if(s[r] == j) curB++

        while(r - l >= k & curB - preB >=2){
            const leftStatus = getStatus(preA,preB)
            t[leftStatus] = 
        }

      }
    }
  }

  return ans;
};
// @lc code=end
