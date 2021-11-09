## 452 用最少数量的箭引爆气球

### 前言

本题主要考察贪心

### 解法一：排序+贪心

在最右边界最靠左的气球的右边界射出一支箭，将气球射爆(移除) => loop，这样的时间复杂度最坏是 O(n^2),将内层循环优化，如果上一只气球的右边界小于下一只气球的左边界则 arrow + 1

```js
var findMinArrowShots = function (points) {
  if (!points.length) {
    return 0
  }

  let i = 0
  let arrowCount = 1
  points.sort((a, b) => a[1] - b[1])

  for (let j = 1; j < points.length; j++) {
    if (points[i][1] < points[j][0]) {
      i = j
      arrowCount++
    }
  }

  return arrowCount
}
```

#### 算法复杂度分析

- 时间复杂度：O(n logn)
- 空间复杂度：O(logn) 即为排序需要使用的栈空间
  &nbsp;
