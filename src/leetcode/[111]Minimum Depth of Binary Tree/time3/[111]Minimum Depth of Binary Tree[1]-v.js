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
  if (!root) return 0

  const queue = [root]
  let layer = 0

  while (queue.length) {
    let len = queue.length
    layer++

    for (let i = 0; i < len; i++) {
      const cur = queue.shift()
      if (cur?.left) queue.push(cur?.left)
      if (cur?.right) queue.push(cur?.right)
      if (!cur?.left && !cur?.right) return layer
    }
  }
}
// @lc code=end
