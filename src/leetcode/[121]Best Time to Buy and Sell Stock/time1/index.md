## 121 买卖股票的最佳时机

### 前言
本题主要考察 DP 基础算法的理解和使用


### 解法一：DP
该问题可拆解为细分的子问题且有局部的最优子结构
状态转移方程为 dp [i] = min(prices[i],dp[i - 1])

```js
var maxProfit = function (prices) {
  const len = prices.length

  //TODO 处理不能获取利润

  //dp[i] 表示 i 天获得的最低点
  let dp = Array(len)
  let max = 0
  
  //处理边界条件
  dp[0] = prices[0]
  
  for(let i = 0;i < len;i++){
    dp[i] = Math.min(prices[i],dp[i - 1])
    if((prices[i] - dp[i - 1]) > max) max = prices[i] - dp[i - 1]
  }

  return max
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
### 解法二：一次遍历
接着考虑优化空间，仔细观察动态规划的辅助数组，其每一次只用到了dp[-1]这一个空间，因此可以把数组改成单个变量dp来存储截止到第i天的价格最低点。优化之后的代码：

```js
var maxProfit = function (prices) {
   let minPrice = Infinity
    let maxPf = 0
    for(let price of prices){
        if(price < minPrice) minPrice = price
        else if(price - minPrice > maxPf) maxPf = price - minPrice
    }
    return maxPf
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;