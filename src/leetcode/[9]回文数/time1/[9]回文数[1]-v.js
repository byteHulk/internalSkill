/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let l = 10 ** (x.toString().length-1);
    while(x>0 && l>0){
        if(Math.floor(x/l) !== x%10) return false
        x = Math.floor((x%l)/10);
        l /= 100;
    };
    return true
 };
// @lc code=end
