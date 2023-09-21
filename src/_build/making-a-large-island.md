## 854 最大人工岛

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：DFS
思路从遍历陆地格子变成遍历海洋格子, 每个第一个海洋格子可以假设为陆地, 用一个 map 来存假设填海的格子,
!!这里注意如果没有 max 最大人工岛, 也就意味着没有海洋格子,所以直接返回全部的面积

!! 这里使用一个 Set 来存储唯一的值


```js
const largestIsland = (grid) => {
  let n = grid.length,
    m = grid[0].length,
    sizes = [0, 0],
    maxIsland = 0

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
        let colorsMap = new Set([
          getColor(i + 1, j),
          getColor(i - 1, j),
          getColor(i, j + 1),
          getColor(i, j - 1),
        ])
        let newSize = 1

        for (let color of colorsMap) {
          newSize += sizes[color]
        }
        maxIsland = Math.max(newSize, maxIsland)
      }
    }
  }

  return maxIsland ? maxIsland : n * m
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    