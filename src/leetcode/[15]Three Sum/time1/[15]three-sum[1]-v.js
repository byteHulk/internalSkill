/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length
  if (len < 3) return []

  let res = []
  let map = {}

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let z = j + 1; z < len; z++) {
        if (nums[i] + nums[j] + nums[z] === 0) {
            let tmpSortStr = String([nums[i],nums[j],nums[z]].sort())
            if(!(tmpSortStr in map)){
                res.push([nums[i], nums[j], nums[z]])
                map[tmpSortStr] = 0
            }
        }
      }
    }
  }
  return res
}
// @lc code=end