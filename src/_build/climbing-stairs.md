## 70 爬楼梯

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：暴力dfs
傻递归

```
var climbStairs = function(n) {
    if (n == 0 || n == 1) return 1
        
    return climbStairs(n - 1) + climbStairs(n - 2)
};
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) O(2^n)
- 空间复杂度：O(1) 
&nbsp;
### 解法二：
将问题拆解为重复子问题，用一次循环即可解决
```
var climbStairs = function(n) {
    if(n <= 2) return n
    let [f1,f2,f3] = [1,2,3]
    for(let i = 3;i <= n;i++){
        f3 = f1 + f2
        f1 = f2
        f2 = f3
    }
    return f3
};
```

#### 算法复杂度分析
- 时间复杂度：O(n) 
- 空间复杂度：O(1) 
&nbsp;