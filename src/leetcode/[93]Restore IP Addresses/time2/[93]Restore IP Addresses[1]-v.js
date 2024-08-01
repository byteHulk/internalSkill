/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const isValid = (str) => {
    if (+str > 255 || !str.length) return false;
    if (str.length > 1 && str[0] === '0') return false;
    return true;
  };
  const helper = (arr, str, result) => {
    if (arr.length === 3) {
      if (isValid(str)) result.push([...arr, str]);
      return;
    }

    for (let i = 1; i < 4; i++) {
        const subStr = str.slice(0,i)
        if(!isValid(subStr)) continue
        helper([...arr,subStr],str.slice(i),result)
    }

    
  };

  const result = [];
  helper([], s, result);
  return result.map((item) => item.join('.'));
};
// @lc code=end
