/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function (nums) {
	if (nums.length <= 1) return nums; //递归中止
	const pivotIdx = Math.floor(nums.length / 2);
	const pivot = nums.splice(pivotIdx, 1)[0];
	const left = [],
		right = [];
	for (let num of nums) {
		if (num < pivot) left.push(num);
		else right.push(num);
	}
	return sortArray(left).concat([pivot], sortArray(right));
};
// @lc code=end
