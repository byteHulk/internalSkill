## 188 买卖股票的最佳时机 IV

### 前言
本题主要考察 DP 基础算法的理解和使用


### 解法一：DP
交易 k 次由固定交易2次演变而来
注意:
需要注意 buy0 时候的特殊处理,和其他循环条件不一样
可以用 k + 1 规避 buy0 时 sell[i - 1] 的取值

```js
var maxProfit = function (k, prices) {
  const buy = Array(k + 1).fill(-Infinity)
  const sell = Array(k + 1).fill(0)

  for (let price of prices) {
    for (let i = 1; i <= k; i++) {
      buy[i] = Math.max(buy[i], sell[i - 1] - price)
      sell[i] = Math.max(sell[i], buy[i] + price)
    }
  }

  return sell[k]
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    