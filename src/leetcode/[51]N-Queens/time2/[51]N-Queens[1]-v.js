/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  backtrack(result, n);
  return result;
};

const backtrack = (res, n, path = [], queenCount = 0) => {
  // 终止条件
  if (queenCount === n) {
    res.push(path.map((i) => ".".repeat(i) + "Q" + ".".repeat(n - i - 1)));
  }

  for (let col = 0; col < n; col++) {
    // 不互相攻击的检测
    if (
      !path.some(
        (item, index) =>
          item === col ||
          item === col + queenCount - index ||
          item === col - queenCount + index
      )
    ) {
      path.push(col);
      backtrack(res, n, path, queenCount + 1);
      path.pop();
    }
  }
};
// @lc code=end
