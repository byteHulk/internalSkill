## 34 在排序数组中查找元素的第一个和最后一个位置

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：二分查找


```js
var searchRange = function (nums, target) {
  const [N, T] = [nums, target]
  //binary search
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1
      if (arr[mid] < target) left = mid + 1
      else right = mid - 1
    }
    return left
  }
  let Tleft = find(T, N)
  if (N[Tleft] !== T) return [-1, -1]
  return [Tleft, find(T + 1, N, Tleft) - 1]
}
```

#### 算法复杂度分析
- 时间复杂度：O(logn)
- 空间复杂度：O(1) 
&nbsp;
    