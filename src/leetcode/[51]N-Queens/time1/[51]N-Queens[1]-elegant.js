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
  const res = []
  backtrack(res, n)
  return res
}

function backtrack(res, n, board = [], r = 0) {
  if (r === n) {
    res.push(board.map((i) => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)))
    return
  }
  for (let col = 0; col < n; col++) {
    if (
      !board.some(
        (bc, br) => bc === col || bc === col + r - br || bc === col - r + br
      )
    ) {
      board.push(col)
      backtrack(res, n, board, r + 1)
      board.pop()
    }
  }
}
// @lc code=end
