/*
 * @lc app=leetcode.cn id=1371 lang=javascript
 *
 * [1371] Find the Longest Substring Containing Vowels in Even Counts
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const len = s.length
    const pos = Array(1 << 5).fill(-1)
    let ans = 0,status = 0
    pos[0] = 0

    for(let i = 0;i < len;i++){
        const ch = s.charAt(i)
        switch(ch){
            case 'a':
                status ^= 1<<0;
                break;
            case 'e':
                status ^= 1<<1;
                break;
            case 'i':
                status ^= 1<<2;
                break;
            case 'o':
                status ^= 1<<3;
                break;
            case 'u':
                status ^= 1<<4;
                break;
        }

        if(pos[status] !== -1){
            ans = Math.max(ans, i + 1 - pos[status])
        }else{
            pos[status] = i + 1
        }
    }

    return ans
};
// @lc code=end
