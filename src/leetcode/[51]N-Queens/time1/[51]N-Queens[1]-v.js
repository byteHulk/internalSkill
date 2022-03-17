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
  // . 表示空位 Q 表示皇后
  // 最好用 O(1) 的复杂度判断是否有皇后在冲突的位置上
  // 用三个集合表示：列(cols) 、 左斜线(leftLines) 、右斜线(rightLines)
  //              0 -> n - 1   行下标 - 列下标      行下标 + 列下标

  // 边界条件： 为 0 为 1
  //   let [cols, leftLines, rightLines] = [{}, {}, {}]
  // let chessBoard = Array.from({ length: len }, () =>
  //       Array.from({ length: len }, () => '.')
  //     )

  //结果数组
  let result = []

  //执行回溯法
  backtracing(0, n, result)

  return result
}

function backtrack(row, n, result, cols = {}, leftLines = {}, rightLines = {}) {
  // 到达底层，将结果添加进 result
  if (row === len) {
    result.push(
      Object.keys(cols).map((i) => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1))
    )
    return
  }

  for (let col = 0; col < n; col++) {
    // 验证是否可以放置
    let v = true
    if (v) {
      cols[col] = 'Q'
      backtrack(row + 1, n, result, cols, leftLines, rightLines)
    }
  }
}
// @lc code=end
