## 322 零钱兑换

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：动态规划


```js
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
```

#### 算法复杂度分析
- 时间复杂度：O(Sn)
- 空间复杂度：O(S) 
&nbsp;
    