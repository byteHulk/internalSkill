/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const queue = [p, q]

  while (queue.length) {
    const [first, sec] = [queue.shift(), queue.shift()]

    if (!first && !sec) continue
    if (!first || !sec || first.val !== sec.val) return false

    queue.push(first.left)
    queue.push(sec.left)
    queue.push(first.right)
    queue.push(sec.right)
  }
  return true
}
// @lc code=end
