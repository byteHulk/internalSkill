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
  const queue = [p,q]

  while (queue.length) {
    const [first, second] = [queue.shift(), queue.shift()]

    // 如果两颗树都为空 继续循环
    if(!first && !second) continue
    if (!first || !second || first.val !== second.val) return false;

    queue.push(first.left);
    queue.push(second.left);
    queue.push(first.right);
    queue.push(second.right);

  }

  return true
}
// @lc code=end
