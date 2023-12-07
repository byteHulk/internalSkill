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
    const upper_bound = (arr, target) => {
        let low = 0, high = arr.length - 1;
        let ans = arr.length; // i'm sure if all are small than me I'll go to end
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const num = arr[mid];
            if (num >= target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
    const lis = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        if (lis.at(-1) < curr) { // if number is increasing my lis length add it
            lis.push(curr)
        } else { // create the eventual possible lis
            const idx = upper_bound(lis, curr);
            lis[idx] = curr;
        }
    }
    return lis.length;
};
// @lc code=end
