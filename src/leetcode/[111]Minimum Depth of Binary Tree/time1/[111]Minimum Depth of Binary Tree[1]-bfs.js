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
  //bfs queue
  if(!root) return 0
  //初始化队列
  let queue = [root],
    depth = 0

  while (queue.length > 0) {
    let len = queue.length
    depth++
    for (let i = 0; i < len; i++) {
      let node = queue.pop()
      if (node?.left) queue.unshift(node?.left)
      if (node?.right) queue.unshift(node?.right)
      if(!node?.left && !node?.right) return depth
    }
  }
}
// @lc code=end
