/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 0 || n == 1) return 1
        
    return climbStairs(n - 1) + climbStairs(n - 2)
};
// @lc code=end