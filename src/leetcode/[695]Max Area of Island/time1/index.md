## 695 岛屿的最大面积

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：DFS
遍历一次岛屿，将陆地(1)和上下左右四个方向的陆地都置为空(0)，且累加岛屿的面积，最后取最大值

```js
var maxAreaOfIsland = function (grid) {
  let maxArea = 0
  let [long, wide] = [grid.length, grid?.[0].length || 0]
  const checkArea = (i, j) => {
    if (i < 0 || j < 0 || i >= long || j >= wide || !grid[i][j]) return 0
    grid[i][j] = 0
    return (
      1 +
      checkArea(i - 1, j) +
      checkArea(i, j - 1) +
      checkArea(i + 1, j) +
      checkArea(i, j + 1)
    )
  }

  for (let i = 0; i < long; i++) {
    for (let j = 0; j < wide; j++) {
      if (grid[i][j]) {
        const area = checkArea(i, j)
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}
```

#### 算法复杂度分析
- 时间复杂度：O(R×C)
- 空间复杂度：O(R×C) 
&nbsp;
    