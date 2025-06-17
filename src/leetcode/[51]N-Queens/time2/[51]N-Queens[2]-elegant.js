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

const backtrack = (result, n, paths = [], row = 0) => {
  if (n === row) {
    result.push(paths.map((i) => ".".repeat(i) + "Q" + ".".repeat(n - i - 1)));
  }

  for (let col = 0; col < n; col++) {
    if (
      !paths.some(
        (coled, rowed) =>
          coled === col ||
          coled === col - rowed + row ||
          coled === col + rowed - row
      )
    ) {
      paths.push(col);
      backtrack(result, n, paths, row + 1);
      paths.pop();
    }
  }
};

// @lc code=end
