/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] Corporate Flight Bookings
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    //差分数组求前缀和
    //d[l] + inc | d[r + 1] -inc
    //d[l - 1] + ic | d[r] -inc !!数组右下标越界问题
    let nums = new Array(n).fill(0)
    for(let booking of bookings){
        nums[booking[0] - 1] += booking[2]
        if(booking[1] < n){
            nums[booking[1]] -= booking[2]
        }
    }

    for(let i = 1;i < n;i++){
        nums[i] += nums[i - 1]
    }
    return nums
};
// @lc code=end
