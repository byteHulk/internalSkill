## 309 最佳买卖股票时机含冷冻期

### 前言
本题主要考察 DP 及基础算法的理解和使用


### 解法一：

三种状态
1.有一只股票
2.未持有股票并处于交易冷冻期中
3.未持有股票不处于交易冷冻期中

```js
var maxProfit = function (prices) {

  const len = prices.length

  let [f1, f2, f3] = [-prices[0], 0, 0]

  for (let i = 1; i < len; i++) {
    let newf1 = Math.max(f1, f3 - prices[i])
    let newf2 = f1 + prices[i]
    let newf3 = Math.max(f2, f3)
    ;[f1, f2, f3] = [newf1, newf2, newf3]
  }

  return Math.max(f2, f3)
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    