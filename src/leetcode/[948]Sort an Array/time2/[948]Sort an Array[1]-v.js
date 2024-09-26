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
    const quickSort = (arr) => {
        const len = arr.length

        if (len === 0) return []

        const greater = []
        const lesser = []
        const pivotIdx = Math.floor(len / 2)
        const pivot = arr.splice(pivotIdx, 1)[0]

        for (let i = 1; i < len; i++) {
            const cur = arr[i]
            if (cur < pivot) {
                lesser.push(cur)
            } else {
                greater.push(cur)
            }
        }


        return quickSort(lesser).concat(pivot, quickSort(greater))

    }

    return quickSort(nums)
};
// @lc code=end
