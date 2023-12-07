/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let list = []

    for(let i = 0;i < nums.length;i++){
        list.push(1)

        for(let j = 0; j < i;j++){
            if(nums[j] < nums[i]) list[i] = Math.max(list[i],list[j] + 1)
        }

    }

    return nums.length ? Math.max.apply(null,list) : 0
};
// @lc code=end
