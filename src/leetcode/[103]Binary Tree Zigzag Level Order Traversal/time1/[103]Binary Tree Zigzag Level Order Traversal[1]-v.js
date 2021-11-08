/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function (root) {
  const helper = (node, l, res) => {
    if (!node) return

    if (res[l] == null) {
      res.push([])
    }

    if (l % 2 === 0) res[l].push(node.val)
    else res[l].unshift(node.val)

    helper(node.left, l + 1, res)
    helper(node.right, l + 1, res)
  }

  let res = []
  helper(root, 0, res)
  return res
}
// @lc code=end
