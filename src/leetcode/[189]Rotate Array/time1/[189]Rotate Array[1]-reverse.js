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
  const reverse = (start,end) => {
    while(start < end){
      const temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      
      start ++
      end --
    }
  }

  let len = nums.length
  k %= len

  //翻转整个数组
  reverse(0,len - 1)
  //翻转0,k mod n - 1
  reverse(0,k - 1)

  //翻转k mod n,n -1
  reverse(k,len - 1)
  
}
// @lc code=end
