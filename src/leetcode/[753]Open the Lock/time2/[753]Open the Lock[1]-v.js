/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  //dps 深度优先遍历

  const dead = new Set(deadends);

  const replaceStr = (str, s, i) => str.substring(0, i) + s + str.substring(i)

  const help = (s, i) => {
    if (dead.has(s)) return -1

    if (s === target) return i

    const res1 = help(replaceStr(s, s[0] + 1, 0), ++i)
    const res2 = help(replaceStr(s, s[0] - 1, 0), ++i)
    const res3 = help(replaceStr(s, s[0] + 1, 1), ++i)
    const res4 = help(replaceStr(s, s[0] - 1, 1), ++i)
    const res5 = help(replaceStr(s, s[0] + 1, 2), ++i)
    const res6 = help(replaceStr(s, s[0] - 1, 2), ++i)
    const res7 = help(replaceStr(s, s[0] + 1, 3), ++i)
    const res8 = help(replaceStr(s, s[0] - 1, 3), ++i)

    const result = [res1, res2, res3, res4, res5, res6, res7, res8].filter(
      (item) => item !== -1
    )
    return result.length ? Math.min(...result) : -1
  }

  return help('0000', 0)
}
// @lc code=end
