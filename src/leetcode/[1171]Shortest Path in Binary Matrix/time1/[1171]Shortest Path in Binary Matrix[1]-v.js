/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let n = grid[0]?.length

  // 起点为 1, 则没有通路径
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1

  // 初始化结果数组
  const dist = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Infinity)
  )
  dist[0][0] = 1

  const que = [[0, 0]]

  while (que.length) {
    const [x, y] = que.shift()

    if (x === n - 1 && y === n - 1) return dist[x][y]

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (x + dx < 0 || x + dx >= n || y + dy < 0 || y + dy >= n) continue // 数组下标越界
        if (grid[x + dx][y + dy] > 0 || dist[x + dx][y + dy] <= dist[x][y] + 1)
          continue // 已访问过或值为1

        dist[x + dx][y + dy] = dist[x][y] + 1
        que.push([x + dx, y + dy])
      }
    }
  }

  return -1
}
// @lc code=end
