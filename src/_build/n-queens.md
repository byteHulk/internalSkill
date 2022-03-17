## 51 N 皇后

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：回溯法


```js
var solveNQueens = function (n) {
  const res = []
  backtrack(res, n)
  return res
}

function backtrack(res, n, board = [], r = 0) {
  if (r === n) {
    res.push(board.map((i) => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)))
    return
  }
  for (let col = 0; col < n; col++) {
    if (
      !board.some(
        (bc, br) => bc === col || bc === col + r - br || bc === col - r + br
      )
    ) {
      board.push(col)
      backtrack(res, n, board, r + 1)
      board.pop()
    }
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    