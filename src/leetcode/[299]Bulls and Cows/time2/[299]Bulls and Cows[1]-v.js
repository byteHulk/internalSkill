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
  const secretMap = secret
    .split("")
    ?.reduce((acc, cur) => ((acc[cur] = 1 + (acc[cur] || 0)), acc), {})

  let bulls = 0,
    cows = 0

  for (let i in guess) {
    // bulls
    if (secret[i] === guess[i]) {
      bulls++
      if (!secretMap[guess[i]]) cows--
      else secretMap[guess[i]] -= 1
      
    } else if (secretMap[guess[i]]) {
      cows++
      secretMap[guess[i]] -= 1
    }
  }

  return bulls + "A" + cows + "B"
}
// @lc code=end
