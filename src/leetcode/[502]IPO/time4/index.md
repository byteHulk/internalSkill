## 502 IPO

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：贪心
- 如果初始资本大于最大的投资本金，直接返回利润中的 k 个最大元素的和即可.
- 选择算法
  - 双循环枚举次数 i 和项目 j
  - 注意初始资本和利润是否满足项目条件(如果初始资本 w 小于当前项目启动资本 and 利润不大于当前投资收益则跳过这个项目，否则选择该项目)
  - 如果没有选择任何项目则直接结束选择算法(没有项目符合标准了)
  - 防止重复选择(将已经选择项目的启动资本设置为最大)
  - 将项目利润算到结果资本里

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
- 时间复杂度：O(n^2)
- 空间复杂度：O(1) 
&nbsp;
    