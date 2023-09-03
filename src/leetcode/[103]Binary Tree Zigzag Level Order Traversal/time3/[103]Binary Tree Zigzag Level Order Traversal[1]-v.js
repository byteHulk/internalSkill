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
  if (!root) return []

  let layer = 0,
    outPut = [],
    queue = [root]

  while (queue.length) {
    let size = queue.length
    let curOutput = []

    // for of in 会跳 item
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()

      if (layer % 2) curOutput.unshift(cur?.val)
      else curOutput.push(cur?.val)

      if (cur?.left) queue.push(cur?.left)
      if (cur?.right) queue.push(cur?.right)
    }

    outPut.push(curOutput)

    layer++
  }
  return outPut
}
// @lc code=end
