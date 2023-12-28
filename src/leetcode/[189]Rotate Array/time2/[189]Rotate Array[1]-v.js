/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length,
    start = (count = 0)

    while(count !== len){
        let cur = start
        let prev = nums[start]

        do{
            const next = (cur + k) % len
            const tmp = nums[next]
            nums[next] = prev
            prev = tmp
            cur = start
            count++
        }while(start !== cur)
        start++
    }
}
// @lc code=end
