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
  const queueP = [p]
  const queueQ = [q]

  while (queueP.length || queueQ.length) {
    const [pCur, qCur] = [queueP.shift(), queueQ.shift()]

    if (pCur?.val !== qCur?.val) return false

    if (pCur?.left && qCur?.left) {
      queueP.push(pCur.left)
      queueQ.push(qCur.left)
    }else if(pCur?.left !== qCur?.left){
      return false
    }

    if (pCur?.right && qCur?.right) {
      queueP.push(pCur.right)
      queueQ.push(qCur.right)
    }else if(pCur?.right !== qCur?.right){
      return false
    }

  }

  return true
}
// @lc code=end
