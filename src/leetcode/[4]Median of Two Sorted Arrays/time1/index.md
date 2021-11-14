## 4 寻找两个正序数组的中位数

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：合并数组取中位数
最直接的方法是将两个数组合并取中位数，两个要点
- p1 === len1 这里是指超过第一个数组下标边界后，合并第二个数组
- 中位数这里，当数组为奇数时中位数为sorted[Math.floor((len1 + len2) / 2)]，反之则求中间两个数的平均值


```js
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length
  let sorted = new Array(len1 + len2).fill(0)
  let p1 = 0
  let p2 = 0
  let cp = 0

  while (cp < len1 + len2) {
    if (p1 === len1) {
      sorted[cp++] = nums2[p2++]
    } else if (p2 === len2) {
      sorted[cp++] = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      sorted[cp++] = nums1[p1++]
    } else {
      sorted[cp++] = nums2[p2++]
    }
  }

  return (len1 + len2) % 2 === 0
    ? (sorted[Math.floor((len1 + len2) / 2)] +
        sorted[Math.floor((len1 + len2) / 2) - 1]) /
        2
    : sorted[Math.floor((len1 + len2) / 2)]
}
```

#### 算法复杂度分析
- 时间复杂度：O(m+n)
- 空间复杂度：O(m+n)
&nbsp;
    