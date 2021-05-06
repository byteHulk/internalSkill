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

  for (let i = 0, j = len - 1; i < j; ) {
    let iIsVaildChar = /[0-9a-z]/gi.test(s[i])
    let jIsVaildChar = /[0-9a-z]/gi.test(s[j])

    if (!iIsVaildChar) {
      i++
      continue
    }else if (!jIsVaildChar) {
      j--
      continue
    }else{
      if(s[i].toLowerCase() !== s[j].toLowerCase()) return false
      i++
      j--
    }
  }
  return true
}
// @lc code=end

// @Time complexity O(n)
// @Spatial complexity O(1)

console.log(isPalindrome('A man, a plan, a canal: Panama'))