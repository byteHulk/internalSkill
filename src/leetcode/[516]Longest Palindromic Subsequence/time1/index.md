## 516 最长回文子序列

### 前言
本题主要考察动态规划的理解和使用


### 解法一：DP
dp[i][j]表示字符串 i 和 j 之间最长的回文子序列长度
dp[i][n - 1]即是字符串最长的回文子序列长度

```js
var longestPalindromeSubseq = function (s) {
  const sLen = s.length
  if (sLen < 2) return sLen

  const dp = Array.from({ length: sLen }, () =>
    Array.from({ length: sLen }, () => 0)
  )

  for (let i = sLen - 1; i >= 0; i--) {
    dp[i][i] = 1
    for (let j = i + 1; j < sLen; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
    }
  }

  return dp[0][sLen - 1]
}
```

#### 算法复杂度分析
- 时间复杂度：O(n^2)
- 空间复杂度：O(n^2) 
&nbsp;
    