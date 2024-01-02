/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(),max = 0

    for(let num of nums){
        numSet.add(num)
    }

    for(let num of numSet){
        if(!numSet.has(num - 1)){
            let current = num
            let longMax = 1

            while(numSet.has(current + 1)){
                current++
                longMax++
            }

            max = Math.max(longMax,max)
        }
    }

    return max
};
// @lc code=end
