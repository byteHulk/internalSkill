/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function (root) {
  if (!root) return 0

  const queue = [root]
  let count = 0

  while (queue.length) {
    const cur = queue.shift()
    count++

    if (cur?.left) queue.push(cur?.left)
    if (cur?.right) queue.push(cur?.right)
  }

  return count
}
// @lc code=end
