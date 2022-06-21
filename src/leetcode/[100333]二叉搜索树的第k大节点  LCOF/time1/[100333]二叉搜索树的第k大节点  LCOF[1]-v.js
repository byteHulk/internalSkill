/*
 * @lc app=leetcode.cn id=剑指 Offer 54 lang=javascript
 *
 * [剑指 Offer 54] 二叉搜索树的第k大节点  LCOF
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res = 0
  const dfs = (root) => {
    if (!root) return false

    dfs(root.right)
    if(!--k) return (res = root.val)
    dfs(root.left)

  }
  dfs(root)
  return res
}
// @lc code=end
