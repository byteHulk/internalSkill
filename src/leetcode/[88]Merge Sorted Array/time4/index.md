## 88 合并两个有序数组

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：
只要 nums2 还有元素没合并，就必须继续
nums1 剩下的其实不用动

```js
var merge = function(nums1, m, nums2, n) {
  let mp = m - 1;
  let np = n - 1;
  let tail = m + n - 1;

  while (np >= 0) {
    if (mp >= 0 && nums1[mp] > nums2[np]) {
      nums1[tail--] = nums1[mp--];
    } else {
      nums1[tail--] = nums2[np--];
    }
  }
};
```

#### 算法复杂度分析
- 时间复杂度：O(m+n)
- 空间复杂度：O(1) 
&nbsp;
    