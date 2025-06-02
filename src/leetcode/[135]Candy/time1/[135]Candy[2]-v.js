/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const len = ratings.length;
  if (!len) return 0;

  let result = 1;

  let pre = 1,
    inc = 1,
    dec = 0;

  for (let i = 1; i < len; i++) {
    if(ratings[i] >= ratings[i - 1]){
      dec = 0
      pre = ratings[i] === ratings[i - 1] ? 1 : pre + 1
      result += pre
      inc = pre
    }else{
      dec++
      if(dec === inc){
        dec ++
      }

      result += dec
      pre = 1
    }
  }

  return result;
};
// @lc code=end
