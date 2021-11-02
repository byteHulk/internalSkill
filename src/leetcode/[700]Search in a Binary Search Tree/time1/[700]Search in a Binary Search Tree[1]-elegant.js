/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root || root.val === val) return root

  let resL = searchBST(root.left, val)
  let resR = searchBST(root.right, val)

  return resL ? resL : resR
}
// @lc code=end
