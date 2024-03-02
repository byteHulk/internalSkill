/*
 * @lc app=leetcode.cn id=502 lang=javascript
 *
 * [502] IPO
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  if (w >= Math.max(...capital))
    return (
      w +
      profits
        .toSorted((a, b) => b - a)
        .slice(0, k)
        .reduce((acc, cur) => acc + cur, 0)
    )

  for (let i = 0; i < k; i++) {
    let projectIndex = maxProfit = -1
    for(let j in profits){
      if(w < capital[j]) continue

      if(profits[j] > maxProfit){
        projectIndex = j
        maxProfit = profits[j]
      }
    }

    if(projectIndex === -1) break

    // 防止重复选择
    capital[projectIndex] = Infinity
    w += profits[projectIndex]

  }

  return w
}
// @lc code=end
