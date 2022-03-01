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

  const replaceStr = (str, s, i) => str.substring(0, i) + s + str.substring(i)

  const h = (s, i) => {
    //递归终止条件
    if (deadends.includes(s)) return -1

    if(s === target) return i

    //每层的逻辑处理
    const res1 = h(replaceStr(s, s[0] + 1, 0), i++)
    const res2 = h(replaceStr(s, s[0] - 1, 0), i++)
    const res3 = h(replaceStr(s, s[1] + 1, 1), i++)
    const res4 = h(replaceStr(s, s[1] - 1, 1), i++)
    const res5 = h(replaceStr(s, s[2] + 1, 2), i++)
    const res6 = h(replaceStr(s, s[2] - 1, 2), i++)
    const res7 = h(replaceStr(s, s[3] + 1, 3), i++)
    const res8 = h(replaceStr(s, s[3] - 1, 3), i++)

    const res = [res1,res2,res3,res4,res5,res6,res7,res8].filter(e => e !== -1)
    return res.length === 0 ? -1 : Math.min(...res) 
  }

  return h('0000', 0)
}
// @lc code=end
