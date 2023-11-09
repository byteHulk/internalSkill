## 34 在排序数组中查找元素的第一个和最后一个位置

### 前言

本题主要考察数组的 API 及基础算法的理解和使用

### 解法一：遍历

直接遍历一遍,存储第一次和最后一次的 index 即可

```js
var searchRange = function (nums, target) {
  let res1 = (res2 = -1)

  for (let i in nums) {
    if (nums[i] === target) {
      if (res1 === -1) (res1 = i), (res2 = i)
      else res2 = i
    }
  }

  return [res1, res2]
}
```

#### 算法复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)
  &nbsp;

### 解法二：二分查找法

构建一个二分查找函数, 先用右移一位找到中位数, 再查看中位数所在的元素和 target 大小比对, 直到找到, 然后检测是否结果等于 target, 等于再查找结尾的数据,不等于则直接返回 [-1,-1]

```js
var searchRange = function (nums, target) {
  const [N, T] = [nums, target]
  const binarySearch = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = (left + right) >> 1
      if (arr[mid] < target) left = mid + 1
      else right = mid - 1
    }

    return left
  }

  const targetLeft = binarySearch(T, N)
  if (N[targetLeft] !== T) return [-1, -1]

  return [targetLeft, binarySearch(T + 1, N, targetLeft) - 1]
}
```

#### 算法复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)
  &nbsp;
