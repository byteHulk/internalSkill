## 502 IPO

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：贪心
如果初始资本大于最大的投资本金，直接返回利润中的 kk 个最大元素的和即可。
```js
var findMaximizedCapital = function(k, w, profits, capital) {
    if(w >= Math.max(...capital)){
        profits.sort((a,b) => b - a)
        return profits.slice(0,k).reduce((acc,cur) => acc + cur,w)
    }

    for(let i = 0 ;i < k;i++){
        let maxProfit = -Infinity
        let projectIndex = -1
        for(let j = 0;j < profits.length;j++){
            if(w < capital[j]) continue

            if(profits[j] >= maxProfit){
                projectIndex = j
                maxProfit = profits[j]
            }
        }
        if(projectIndex === -1) {
         break;
       }
       capital[projectIndex] = Infinity
       w += maxProfit
    }
    return w
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    