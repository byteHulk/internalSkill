/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    //去掉头尾斜杠和重复的斜杠
    let standPath = path.replace(/(\/)\1+/g,'/').replace(/^\//g,'').replace(/\/$/g,'')
    let pathStack = []
    let pathArr = standPath.split('/')
    let actionMap = {
        '..': pathStack.pop(), //TODO 根目录情况
        '.': ''
    }

    for(let p of pathArr){
        switch(p){
            case '..':
                pathStack.pop();
                break;
            case '.':
                break;
            default:
                pathStack.push(p)
        }
    }
    return '/' + pathStack.join('/')
};
// @lc code=end
