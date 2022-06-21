## 215 数组中的第K个最大元素

### 前言
本题主要考察排序基础算法的理解和使用


### 解法一：简单排序优化版
直接的想法就是先排序完，再返回 topK 的元素，冒泡排序和选择排序都是需要多趟来排序，每 k 趟可以确定 topK，所以这里选择使用 k 来优化排序次数

```js
var findKthLargest = function (nums, k) {
  const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for (let outer = 0; outer < nums.length; outer++) {
    for (let inner = nums.length; inner > outer; inner--) {
      if (nums[inner] > nums[inner - 1]) {
        swap(nums, inner, inner - 1)
      }
    }
  }
  return nums[k - 1]
}
```

#### 算法复杂度分析
- 时间复杂度：O(nlogn)
- 空间复杂度：O(1) 
&nbsp;
    