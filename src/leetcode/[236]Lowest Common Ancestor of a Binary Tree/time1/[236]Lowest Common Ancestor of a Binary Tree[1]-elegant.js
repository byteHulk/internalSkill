/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  //1.dfs 2.set ele 3.compare
  if (!root || root === p || root === q) return root
  let resL = lowestCommonAncestor(root.left, p, q)
  let resR = lowestCommonAncestor(root.right, p, q)
  return resL && resR ? root : resL || resR
}
// @lc code=end
