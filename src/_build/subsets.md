## 78 子集

### 前言
本题主要考察回溯法基础的理解和使用


### 解法一：回溯法
要注意 DFS 是一个劲的往某一个方向搜索，而回溯算法建立在 DFS 基础之上的，但不同的是在搜索过程中，达到结束条件后，恢复状态，回溯上一层，再次搜索。因此回溯算法与 DFS 的区别就是有无状态重置

```js
var subsets = function (nums) {
  let result = []
  backtrack(nums, [], 0, result)
  return result
}

function backtrack(nums, path, start, result) {
  //没有终止条件
  //注意这里要克隆当前值保留结果
  result.push([...path])

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]) // 做出选择
    backtrack(nums, path, i + 1, result)
    path.pop()
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    