## 122 买卖股票的最佳时机 II

### 前言
本题主要考察 dp 基础算法的理解和使用


### 解法一：DP
dp[i][0] 表示 i 天 手里没有股票时的最大利润
dp[i][i] 表示 i 天 手里有股票时的最大利润

```js
var maxProfit = function (prices) {
  const len = prices.length

  //dp[i][0] 表示 i 天 手里没有股票时的最大利润
  //dp[i][i] 表示 i 天 手里有股票时的最大利润
  const dp = Array.from({ length: len }, () => Array(2).fill(0))

  //初始化边界条件
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < len; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0],dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1],dp[i - 1][0] - prices[i])
  }

  return dp[len - 1][0]
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
### 解法二：空间优化版的 DP
从解法一可以看出每一天的状态只与前一天的状态有关，与之前的状态无关，所以可以去掉这些无用的变量

```js
var maxProfit = function (prices) {
  const len = prices.length

  //dp[i][0] 表示 i 天 手里没有股票时的最大利润
  //dp[i][i] 表示 i 天 手里有股票时的最大利润
  let dp0 = 0, dp1 = -prices[0]

  for (let i = 1; i < len; ++i) {
    dp0 = Math.max(dp0,dp1 + prices[i])
    dp1 = Math.max(dp1,dp0 - prices[i])
  }

  return dp0
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
### 解法三：贪心
由于可以当天买当天卖，利益最大化即可(当天比前一天价格高就卖出)，贪心只能求最大利润，不能求出交易过程

```js
 var maxProfit = function (prices) {
  const len = prices.length
  let ans = 0

  for(let i = 1;i < len;i++){
    ans += Math.max(0,prices[i] - prices[i - 1])
  }
  return ans
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
    