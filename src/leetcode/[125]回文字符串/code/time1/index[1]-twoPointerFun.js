/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //自顶向下编程 主干逻辑(新闻稿方式)
  //1.too pointer to center 2.skip invaild chart and compare 3.too pointer meet true

  const len = s.length
  const isVaildChar = (c) => /[a-z0-9]/gi.test(c)
  let [left, right] = [0, len - 1]

  while (left < right) {
    const l = s[left].toLowerCase()
    const r = s[right].toLowerCase()
    let isLeftVaild = isVaildChar(l)
    let isRightVaild = isVaildChar(r)

    if (!isLeftVaild) {
      left++
      continue
    }

    if (!isRightVaild) {
      right--
      continue
    }
    
    if (l !== r) {
      return false
    }

    left++
    right--
  }
  return true
}
// @lc code=end

// @Time complexity O(n)
// @Spatial complexity O(1)

console.log(isPalindrome('A man, a plan, a canal: Panama'))