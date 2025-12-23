## 463 岛屿的周长

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：DFS
遍历个格子 当超出网格时候，实际上就经过了一条黄色的边；而当函数因为「当前格子是海洋格子」返回的时候，实际上就经过了一条蓝色的边。这样，我们就把岛屿的周长跟 DFS 遍历联系起来了


```js
var islandPerimeter = function (grid) {
  let n = grid.length,
    m = grid[0].length

  const dfs = (i, j) => {
    // 超出网格边界加一条黄色边
    if (i < 0 || j < 0 || i >= n || j >= m) return 1

    //海洋格子加一条蓝色边
    if (grid[i][j] === 0) return 1

    // 处理已经遍历过的格子
    if (grid[i][j] !== 1) return 0

    grid[i][j] = 2

    return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j]) return dfs(i, j)
    }
  }

  return 0
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    