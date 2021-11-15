## 392 判断子序列

### 前言
本题主要考察字符串的API及基础算法的理解和使用


### 解法一：双指针
贪心的匹配s中字符的下一位置，是否存在t中，要点在于：
while的结束条件


```js
var isSubsequence = function(s, t) {
    let i = 0,j = 0

    while(i < s.length && j < t.length){
        if(s[i] === t[j]){
            i++
        }
        j++
    }

    return i === s.length
};
```

#### 算法复杂度分析
- 时间复杂度：O(m+n)
- 空间复杂度：O(1) 
&nbsp;
### 解法二：dp进行字符串预处理/判断s是否等于最长子序列的长度


```js
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
```

#### 算法复杂度分析
- 时间复杂度：O(n) 预处理的时间为O(m),真正查找的时间为O(n)
- 空间复杂度：O(m) 
&nbsp;
    