/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let grid = new Array(s.length + 1);
    
    for(let i = 0; i < grid.length; i++){
        grid[i] = new Array(t.length + 1);
    }
    
    //initialize zeroes
    for(let i = 0; i < grid[0].length; i++){
        grid[0][i] = 0;
    }
    
    for(let elementInFirstColumn of grid){
        elementInFirstColumn[0] = 0;
    }
        
    for(let i = 1; i <= s.length; i++){
        for(let j = 1; j <= t.length; j++){
            
            //if match, do something
            if(s[i-1] === t[j-1]){
                grid[i][j] = 1 + grid[i-1][j-1];
            }
            
            //if not match, do something
            else if(s[i-1] !== t[j-1]){
                grid[i][j] = Math.max(grid[i][j-1], grid[i-1][j]);
            }
        }
    }
    
    return grid[s.length][t.length] === s.length
};
// @lc code=end