/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  let helper = (root) => {
    if (!root) return null
    if (root.val === key) {
      if (!root?.left) return root.right
      if (!root.right) return root.left

      let cur = root.right
      while (cur.left) cur = cur.left
      cur.left = root.left

      return root.right
    }

    if (key > root.val) root.right = helper(root.right)
    else root.left = helper(root.left)
    return root
  }
  return helper(root)
}
// @lc code=end
