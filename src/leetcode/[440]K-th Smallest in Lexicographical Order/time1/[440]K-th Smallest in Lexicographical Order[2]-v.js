/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] K-th Smallest in Lexicographical Order
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let cur = 1
  k--
  while(k > 0){
    let preTreeCount = getPreTreeCount(cur,n)
    if(preTreeCount <= k){
        k -= preTreeCount;
        cur++
    }else{
        cur = cur * 10
        k--
    }
  }

  return cur
};

const getPreTreeCount = (cur,n) => {
    let sum = 0
    let first = cur
    let last = cur

    while(first <= n){
        sum+= Math.min(last,n) - first + 1
        first = first * 10
        last = last * 10 + 9
    }

    return sum
}
// @lc code=end
