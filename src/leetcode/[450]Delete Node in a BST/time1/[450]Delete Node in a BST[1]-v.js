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
  //后继节点
  const successor = (root) => {
    root = root.right
    while (root.left !== null) root = root.left
    return root.val
  }

  //前驱节点
  const predecessor = (root) => {
    root = root.left
    while (root.right !== null) root = root.right
    return root.val
  }

  if (root == null) return null

  // delete from the right subtree
  if (key > root.val) root.right = deleteNode(root.right, key)
  // delete from the left subtree
  else if (key < root.val) root.left = deleteNode(root.left, key)
  // delete the current node
  else {
    // the node is a leaf
    if (root.left == null && root.right == null) root = null
    // the node is not a leaf and has a right child
    else if (root.right != null) {
      root.val = successor(root)
      root.right = deleteNode(root.right, root.val)
    }
    // the node is not a leaf, has no right child, and has a left child
    else {
      root.val = predecessor(root)
      root.left = deleteNode(root.left, root.val)
    }
  }
  return root
}
// @lc code=end
