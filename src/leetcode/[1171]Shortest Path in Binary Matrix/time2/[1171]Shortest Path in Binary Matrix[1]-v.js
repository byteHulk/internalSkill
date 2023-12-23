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
  const n = grid.length

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1

  const dist = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Infinity)
  )
  dist[0][0] = 1

  const queue = [[0, 0]]

  while (queue.length) {
    const [x, y] = queue.shift()

    if (x === n - 1 && y === n - 1) return dist[x][y]

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (x + dx < 0 || x + dx >= n || y + dy < 0 || y + dy >= n) continue // 数组下标越界
        if (grid[x + dx][y + dy] === 1 || dist[x + dx][y + dy] <= dist[x][y] + 1)
          continue // 值为1 || 已超过目前的最短距离 或 已访问过

        dist[x + dx][y + dy] = dist[x][y] + 1
        queue.push([x + dx, y + dy])
      }
    }
  }

  return -1
}
// @lc code=end
