/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};
// @lc code=end

