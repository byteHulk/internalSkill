/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) return []

    const result = []

    const queue = [root]

    while (queue.length) {
        const layerResArr = []
        const nextLayerArr = []
        const len = queue.length

        for (let i = 0; i < len; i++) {
            const item = queue.shift()
            layerResArr.push(item.val)

            if (item.left) nextLayerArr.push(item.left)
            if (item.right) nextLayerArr.push(item.right)
        }

        queue.push(...nextLayerArr)
        result.push(layerResArr)
    }

    return result
};
// @lc code=end
