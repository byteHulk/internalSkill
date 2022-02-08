## 72 编辑距离

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：DP
通过题目得出以下性质

性质 1：增删改操作是对称的
就是我们对于其中一个串的编辑操作，总能找到对另一个串等价的编辑操作。
因此对于一次编辑操作，从结果编辑距离的角度来看，发生在 S 或者在 T 都是等价的！

性质 2：增删改操作的顺序可以是任意的
因此我们可以按 S 字符串顺序的考虑三种可能的操作！

性质 3：存在最优子问题
因此我们可以通过从最小的子问题不断向上迭代

```js
var minDistance = function (word1, word2) {
  let [len1, len2] = [word1.length, word2.length]
  //处理有字符串为空的情况
  if (!len1 || !len2) return len1 + len2

  //dp 方程为 word1 的前 i 位到 word2 的前 j 位的编辑距离
  let dp = Array.from({ length: word1.length + 1 }, () =>
    Array.from({ length: word2.length + 1 }, () => 0)
  )
  //处理边界情况
  for (let i = 0; i <= len1; i++) dp[i][0] = i
  for (let j = 0; j <= len2; ++j) dp[0][j] = j

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
    }
  }

  return dp[len1][len2]
}
```

#### 算法复杂度分析
- 时间复杂度：O(MN)
- 空间复杂度：O(M) 
&nbsp;
    