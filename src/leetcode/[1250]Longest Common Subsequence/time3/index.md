## 1250 最长公共子序列

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：dp

用 dp[i][j] 表示 text1 的前 i 个字符和 text2 的前 j 个字符的最长公共子序列的长度。
如果前一个字符相同，则在前一个 dp + 1 为状态转移
不同则取 i - 1 或 j - 1 的最大值

注意：
所有数组要空一个元素来添加留白，方便判断前一个元素和取结果 (m + 1 | n + 1)
相应的数组遍历条件也应为 <=
```js
var longestCommonSubsequence = function (text1, text2) {
  let dp = []
  let m = text1.length
  let n = text2.length
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if(text1.charAt(i - 1) !== text2.charAt(j - 1)){
        dp[i][j] = Math.max(dp[i - 1][j],dp[i][j - 1])
      }else{
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
    }
  }
  return dp[m][n]
}
```

#### 算法复杂度分析
- 时间复杂度：O(MN)
- 空间复杂度：O(MN) 
&nbsp;
### 解法一：带记忆的递归


```js
var longestCommonSubsequence = function (text1, text2) {
  const memo = new Map()
  return recursion(text1, text2, text1.length - 1, text2.length - 1, memo)
}

function recursion(text1, text2, index1, index2, memo) {
  // base cases
  if (index1 < 0 || index2 < 0) return 0

  const key = index1 + "#" + index2

  if (memo.has(key)) return memo.get(key)

  let result

  if (text1.charAt(index1) === text2.charAt(index2)) {
    result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1
  } else {
    result = Math.max(
      recursion(text1, text2, index1, index2 - 1, memo),
      recursion(text1, text2, index1 - 1, index2, memo)
    )
  }

  memo.set(key, result)
  return result
}
```

#### 算法复杂度分析
- 时间复杂度：O(MN)
- 空间复杂度：O(MN) 
&nbsp;
    