## 695 岛屿的最大面积

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：DFS


```js
var maxAreaOfIsland = function (grid) {
  if (grid.length === 0) return 0

  let maxAreaNumResult = 0

  const getOneIslandMaxAreaNum = (i, j) => {
    
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] == 0
    )
      return 0

    grid[i][j] = 0

    let goLeft = getOneIslandMaxAreaNum(i, j - 1)
    let goRight = getOneIslandMaxAreaNum(i, j + 1)
    let goTop = getOneIslandMaxAreaNum(i - 1, j)
    let goBottom = getOneIslandMaxAreaNum(i + 1, j)

    return goLeft + goRight + goTop + goBottom + 1
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) continue

      let max = getOneIslandMaxAreaNum(i, j)

      maxAreaNumResult = Math.max(max, maxAreaNumResult)
    }
  }

  return maxAreaNumResult
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    