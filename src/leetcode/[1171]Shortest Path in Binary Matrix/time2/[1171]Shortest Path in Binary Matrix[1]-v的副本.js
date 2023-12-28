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
        let [dxed, dyed] = [x + dx, y + dy]

        if (dxed < 0 || dyed < 0 || dxed >= n || dyed >= n) continue
        if (grid[dxed][dyed] === 1 || dist[dxed][dyed] <= dist[x][y] + 1)
          continue

        dist[dxed][dyed] = dist[x][y] + 1
        queue.push([dxed, dyed])
      }
    }
  }

  return -1
}
// @lc code=end
