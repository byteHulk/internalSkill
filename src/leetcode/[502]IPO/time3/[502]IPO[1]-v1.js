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
  if (w >= Math.max(...capital)) {
    profits.sort((a, b) => b - a)
    return profits.slice(0, k).reduce((acc, cur) => acc + cur, w)
  }

  for (let i = 0; i < k; i++) {
    let maxProfit = 0,
      projectIndex = -1

    for (let j = 0; j < capital.length; j++) {
      if (w < capital[j]) continue

      if (profits[j] > maxProfit) {
        projectIndex = j
        maxProfit = profits[j]
      }
    }

    if (projectIndex === -1) break
    w += maxProfit
    capital[projectIndex] = Infinity
  }

  return w
}
// @lc code=end
