## 123 买卖股票的最佳时机 III

### 前言

本题主要考察数组的 API 及基础算法的理解和使用

### 解法一：

```js

```

#### 算法复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)

### 模版代码参考

```js
maxProfit(prices) {
        const buy = new Array(3).fill(Number.MIN_SAFE_INTEGER);
        const sel = new Array(3).fill(0);

        for (const price of prices) {
            for (let j = 1; j < 3; j++) {
                buy[j] = Math.max(buy[j], sel[j - 1] - price);
                sel[j] = Math.max(sel[j], buy[j] + price);
            }
        }

        return sel[2];
    }
```

&nbsp;
