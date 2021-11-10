## 56 合并区间

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：排序 + merge


```js
var merge = function (intervals) {
  if (!intervals?.length) return intervals

  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  let res = [prev]

  for (let [start, end] of intervals) {
    if (start <= res[res.length - 1][1]) {
      const [startPrev, endPrev] = res.pop()
      res.push([startPrev, Math.max(end, endPrev)])
    } else res.push([start, end])
  }
  return res
}
```

#### 算法复杂度分析
- 时间复杂度：O(n logn)
- 空间复杂度：O(n logn) 
&nbsp;
    