## 200 岛屿数量

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：DFS
针对每个为 1 的网格做上下左右 DFS 遍历, 对于访问过的网格可以做为 0/2 处理, 本次采用的是用一个哈希表存储


```js
var numIslands = function (grid) {
  let isandCount = 0,
    isVisited = {}

  const handleRoundIslands = (i, j) => {
    // if (!(`${i}_${j}` in isVisited)) {
    //   if (grid[i][j] === "1" && !isExpand) isandCount++
    //   isVisited[`${i}_${j}`] = grid[i][j]
    // }

    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid?.[0]?.length ||
      grid[i][j] === "0" ||
      `${i}_${j}` in isVisited
    )
      return

    isVisited[`${i}_${j}`] = grid[i][j]

    // go left
    handleRoundIslands(i, j - 1)

    // go top
    handleRoundIslands(i - 1, j)

    // go right
    handleRoundIslands(i, j + 1)

    // go bottom
    handleRoundIslands(i + 1, j)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid?.[0]?.length; j++) {
      if (grid[i][j] === "1" && !(`${i}_${j}` in isVisited)) isandCount++

      handleRoundIslands(i, j)
    }
  }

  return isandCount
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    