/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  const len = secret.length

  let numberArr = []
  let [bulls, cows] = [0, 0]

  for (let i in secret) {
    if (secret[i] === guess[i]) bulls++
    else if (numberArr.includes(guess[i])) {
      cows++
      const index = numberArr.findIndex((n) => n === guess[i])
      numberArr.splice(index, 1)
    } else {
      numberArr.push(guess[i])
    }
  }
console.log(numberArr,'numberArr')
  return `${bulls}A${cows}B`
}
// @lc code=end
