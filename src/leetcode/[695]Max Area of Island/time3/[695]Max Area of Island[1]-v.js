/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;

  const getOneIslandMaxAreaNum = (i, j) => {
    // 边界条件
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] == 0
    )
      return 0;

    grid[i][j] = 0;

    let goTop = getOneIslandMaxAreaNum(i - 1, j);
    let goBottom = getOneIslandMaxAreaNum(i + 1, j);
    let goLeft = getOneIslandMaxAreaNum(i, j - 1);
    let goRight = getOneIslandMaxAreaNum(i, j + 1);

    return goTop + goBottom + goLeft + goRight + 1;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) continue;

      const max = getOneIslandMaxAreaNum(i, j);
      result = Math.max(result, max);
    }
  }

  return result;
};
// @lc code=end
