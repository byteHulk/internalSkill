## 200 岛屿数量

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：
dfs深度遍历求解，将遍历过的元素及周边元素置为0，岛屿数量+1

```js
var numIslands = function (grid) {
  //1.foreach  2.if ele equal 1  3.dfs set round ele 0 4.return dfs
  const dfs = (grid, r, c) => {
    const nr = grid.length
    const nc = grid[0].length

    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == "0") {
      return
    }
    // 将当前点置为0
    grid[r][c] = "0"
    // 左
    dfs(grid, r - 1, c)
    // 右
    dfs(grid, r + 1, c)
    // 下
    dfs(grid, r, c - 1)
    // 上
    dfs(grid, r, c + 1)
  }
  if (grid == null || grid.length == 0) {
    return 0
  }
  // 行
  const nr = grid.length
  // 列
  const nc = grid[0].length
  let num_islands = 0
  // 对每个点遍历
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      // 如果是1，左dfs遍历
      if (grid[r][c] == "1") {
        num_islands++
        // r, c为当前坐标
        dfs(grid, r, c)
      }
    }
  }

  return num_islands
}
```

#### 算法复杂度分析
- 时间复杂度：O(MN)，其中 MM 和 NN 分别为行数和列数
- 空间复杂度：O(MN)，最坏情况:整个网格均为陆地,深度优先搜索的深度达到 MN
&nbsp;