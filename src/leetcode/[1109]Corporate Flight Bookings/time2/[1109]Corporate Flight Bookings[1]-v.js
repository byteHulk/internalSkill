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
