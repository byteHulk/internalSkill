/*
 * @Author: your name
 * @Date: 2022-03-23 18:20:24
 * @LastEditTime: 2022-03-23 19:33:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /internalSkill/src/leetcode/[111]Minimum Depth of Binary Tree/time2/[111]Minimum Depth of Binary Tree[1]-v.js
 */
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
  // 边界情况
  if (!root) return 0

  const queue = [root]
  let depth = 0

  while (queue.length > 0) {
    let len = queue.length
    depth++
    for (let i = 0; i < len; i++) {
      const cur = queue.pop()
      if (cur?.left) queue.unshift(cur?.left)
      if (cur?.right) queue.unshift(cur?.right)
      if (!cur?.left && !cur?.right) return depth
    }
  }
}
// @lc code=end
