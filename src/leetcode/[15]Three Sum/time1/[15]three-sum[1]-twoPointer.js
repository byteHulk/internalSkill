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
  if(len < 3) return []

  let res = []
  nums.sort((a,b) => a - b)

  for(let k = 0;k < len - 2;k++){
    if(nums[k] > 0 ) break
    if(k > 0 && nums[k] === nums[k - 1]) continue
    for(let i = k + 1,j = len - 1;i < j;){
      let s = nums[k] + nums[i] + nums[j]
      if(s < 0) {
        i++
        while(i < j && nums[i] === nums[i - 1]) i++
      }else if(s > 0){
        j--
        while(i < j && nums[j] === nums[j + 1]) j--
      }else{
        res.push([nums[k] , nums[i] , nums[j]])
        i++
        j--
        while(i < j && nums[i] === nums[i - 1]) i++
        while(i < j && nums[j] === nums[j + 1]) j--
      }
    }
  }
  return res
}
// @lc code=end

