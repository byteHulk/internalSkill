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
const largestIsland = (grid) => {
  let n, m, g, color

  g = grid
  n = g.length
  m = g[0].length
  let res = 0
  let sizes = [0, 0]

  const paint = (i, j, color) => {
    if (getColor(i, j) != 1) return 0
    g[i][j] = color
    return (
      1 +
      paint(i + 1, j, color) +
      paint(i - 1, j, color) +
      paint(i, j + 1, color) +
      paint(i, j - 1, color)
    )
  }

  const getColor = (i, j) => {
    return i < 0 || j < 0 || i >= n || j >= m ? 0 : g[i][j]
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (g[i][j] == 1) {
        let size = paint(i, j, sizes.length)
        sizes.push(size)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (g[i][j] == 0) {
        let se = new Set([
          getColor(i + 1, j),
          getColor(i - 1, j),
          getColor(i, j + 1),
          getColor(i, j - 1),
        ])
        let newSize = 1
        for (const color of se) {
          newSize += sizes[color]
        }
        res = Math.max(res, newSize)
      }
    }
  }
  console.log(res, sizes, g)
  return res == 0 ? n * m : res
}

largestIsland([
  [1, 1, 0, 0],
  [0, 0, 1, 1],
])
// @lc code=end
