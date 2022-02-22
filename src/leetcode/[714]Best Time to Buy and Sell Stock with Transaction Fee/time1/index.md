## 714 买卖股票的最佳时机含手续费

### 前言
本题主要考察 DP 基础算法的理解和使用


### 解法一：DP
和 122 比多了手续费，所以只要在 sell 完成一笔交易时加上交易费即可

```js
var maxProfit = function(prices, fee) {
    const n = prices.length;
    let [sell, buy] = [0, -prices[0]];
    for (let i = 1; i < n; i++) {
        [sell, buy] = [Math.max(sell, buy + prices[i] - fee), Math.max(buy, sell - prices[i])]
    }
    return sell;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    