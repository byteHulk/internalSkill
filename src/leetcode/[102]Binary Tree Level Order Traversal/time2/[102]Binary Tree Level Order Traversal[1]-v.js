/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function(root) {
    if (root == null)
    return []
let res = [], queue = []
queue.push(root)
while (queue.length) {
    let levl = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
        let tmp = queue.shift()
        if (tmp.left)
            queue.push(tmp.left)
        if (tmp.right)
            queue.push(tmp.right)
        levl.push(tmp.val)
    }
    res.push(levl)
}
return res
};
// @lc code=end
