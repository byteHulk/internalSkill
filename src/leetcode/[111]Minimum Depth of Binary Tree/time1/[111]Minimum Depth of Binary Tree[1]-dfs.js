/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
  //递归终止条件
  if(!root) return 0
  if(!root?.left) return minDepth(root?.right) + 1
  if(!root?.right) return minDepth(root?.left) + 1
  return Math.min(minDepth(root?.left),minDepth(root?.right)) + 1
}
// @lc code=end
