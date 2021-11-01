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
var lowestCommonAncestor = function(root, p, q) {
    //1.dfs 2.set ele 3.compare
    let pAncestors = []
    let qAncestors = []
    const helper = (root,ancestors = []) => {
        // console.log(root,'root')
        let arr = [...ancestors]
        arr.push(root)
        if(root === p) pAncestors = [...arr]
        if(root === q) qAncestors = [...arr]
        if(root?.left) helper(root.left,arr)
        if(root?.right) helper(root.right,arr)
    }
    helper(root)

    for(let pItem of pAncestors.reverse()){
        if(qAncestors.includes(pItem)) return pItem
    }
    return null
};
// @lc code=end
