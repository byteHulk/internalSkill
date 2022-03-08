/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    //字符串为空或者长度为奇数则必定为无效
     if(!s || s.length % 2) return false
    // let lMap = ['(', '{', '[']
    // let rMap = [')', '}', ']']
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    },
    stack = []

    //遍历字符串
    for(let i of s){
        //判断是否为开始符号
        if(i in map){
            stack.push(map[i])
        }else{
            if(i !== stack.pop()) return false
        }
    }

    return stack.length === 0
}
// @lc code=end
