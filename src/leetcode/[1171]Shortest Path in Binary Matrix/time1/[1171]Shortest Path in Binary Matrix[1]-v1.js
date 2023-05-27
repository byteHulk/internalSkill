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
  // 1.O(1) 判定出结果的 case 2.BFS 遍历(八个方向延伸,注意越界和已访问), dist 存储最短路径
  const len = grid[0].length

  if (grid[0][0] === 1 || grid[len - 1][len - 1] === 1) return -1

  const dist = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => Infinity)
  )
  dist[0][0] = 1

  const queue = [[0, 0]]

  while (queue.length) {
    const [x, y] = queue.shift()
    if (x === len - 1 && y === len - 1) return dist[x][y]

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        // 偏移后的坐标
        const [movedX, movedY] = [x + dx, y + dy]

        // 越界
        if (movedX < 0 || movedX >= len || movedY < 0 || movedY >= len) continue

        // 已访问过、值为1
        if (
          dist[movedX][movedY] <= dist[x][y] + 1 ||
          grid[movedX][movedY] === 1
        )
          continue

        // 往队列里面新增元素、更新 dist
        queue.push([movedX, movedY])
        dist[movedX][movedY] = dist[x][y] + 1
      }
    }
  }

  return -1
}
// @lc code=end
