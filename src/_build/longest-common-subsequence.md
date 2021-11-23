## 1250 最长公共子序列

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：dp


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
    