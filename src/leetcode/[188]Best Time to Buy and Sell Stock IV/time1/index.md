## 188 买卖股票的最佳时机 IV

### 前言
本题主要考察 DP 基础算法的理解和使用


### 解法一：DP
将 123 的解法扩展为 k 是动态的


```js
var maxProfit = function (k, prices) {
  const len = prices.length

  if(k == 0) return 0

  //交易的状态位
  const tradeTatus = Array.from({ length: k * 2 }, (v, i) =>
    i % 2 ? 0 : -prices[0]
  )

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < tradeTatus.length; j++) {
      let curProfit = -prices[i]
      if (j % 2) curProfit = tradeTatus[j - 1] + prices[i]
      else if (j !== 0) curProfit = tradeTatus[j - 1] - prices[i]

      tradeTatus[j] = Math.max(tradeTatus[j], curProfit)
    }
  }
  return tradeTatus[tradeTatus.length - 1]
}
```

#### 算法复杂度分析
- 时间复杂度：O(nmin(n,k))
- 空间复杂度：O(k) 
&nbsp;
### 解法二：DP
添加当 k > (prices.length / 2) 可以无限制次数


```js
var maxProfit = function (k, prices) {
  const len = prices.length

  if(k == 0) return 0

  if (k > len / 2) {
    let profit = 0
    for (let i = 1; i < len; i++)
      profit = profit + Math.max(0, prices[i] - prices[i - 1])
    return profit
  }

  //交易的状态位
  const tradeTatus = Array.from({ length: k * 2 }, (v, i) =>
    i % 2 ? 0 : -prices[0]
  )

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < tradeTatus.length; j++) {
      let curProfit = -prices[i]
      if (j % 2) curProfit = tradeTatus[j - 1] + prices[i]
      else if (j !== 0) curProfit = tradeTatus[j - 1] - prices[i]

      tradeTatus[j] = Math.max(tradeTatus[j], curProfit)
    }
  }
  return tradeTatus[tradeTatus.length - 1]
}
```

#### 算法复杂度分析
- 时间复杂度：O(nmin(n,k))
- 空间复杂度：O(k) 
&nbsp;