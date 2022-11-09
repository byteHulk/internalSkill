## 215 数组中的第K个最大元素

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：快排变种
参考快排的底层(分治思想)，每次迭代都能确定一个元素的位置，可以通过这个来缩小排序的范围

```js
var findKthLargest = function (nums, k) {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
  }

  const quickSelect = (arr, k) => {
    const q = getRandomInt(0, arr.length - 1)
    let lesser = [],
      greater = [],
      mid = [],
      pivot = arr[q]

    for (let item of arr) {
      if (item < pivot) lesser.push(item)
      else if (item > pivot) greater.push(item)
      else if (item === pivot) mid.push(item)
    }
    
    if (greater.length >= k) pivot = quickSelect(greater, k)
    else if(greater.length + mid.length < k) pivot = quickSelect(lesser, k - greater.length - mid.length)

    return pivot
  }

  return quickSelect(nums, k)
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(logn) 递归使用栈空间的空间代价的期望为 O(logn) 
&nbsp;
    