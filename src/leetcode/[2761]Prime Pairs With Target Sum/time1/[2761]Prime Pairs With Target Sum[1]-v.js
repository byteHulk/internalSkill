/*
 * @lc app=leetcode.cn id=2761 lang=javascript
 *
 * [2761] Prime Pairs With Target Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function (n) {
  if (n <= 3) return [];
  const result = [];

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= n / 2; i++) {
    if (isPrime(i) && isPrime(n - i)) result.push([i, n - i]);
  }

  return result;
};
// @lc code=end
