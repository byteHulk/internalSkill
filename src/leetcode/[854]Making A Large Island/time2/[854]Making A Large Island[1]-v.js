/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] Making A Large Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  let n = grid.length,
    m = grid[0].length,
    sizes = [0, 0],
    max = 0

  const paint = (i, j, color) => {
    if (getColor(i, j) != 1) return 0

    grid[i][j] = color

    return (
      1 +
      paint(i - 1, j, color) +
      paint(i + 1, j, color) +
      paint(i, j - 1, color) +
      paint(i, j + 1, color)
    )
  }

  const getColor = (i, j) =>
    i < 0 || j < 0 || i >= n || j >= m ? 0 : grid[i][j]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        let size = paint(i, j, sizes.length)
        sizes.push(size)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 0) {
        let colorMap = new Set([
          getColor(i - 1, j),
          getColor(i + 1, j),
          getColor(i, j - 1),
          getColor(i, j + 1),
        ])
        let newSize = 1
        for (let color of colorMap) {
          newSize += sizes[color]
        }
        max = Math.max(newSize, max)
      }
    }
  }

  return max ? max : n * m
}
// @lc code=end
