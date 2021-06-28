## 26 删除有序数组中的重复项

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：双指针
对于给定的**有序**数组，只要保证当前元素和前一个元素不一样即可判断为未重复元素，左指针指向已填充好的数组下标，右指针用来遍历元素

```js
var removeDuplicates = function (nums) {
  let l = 0,
    r = 0

  while (r < nums.length) {
    if (nums[r] != nums[r - 1]) {
      nums[l] = nums[r]
      l++
    }
    r++
  }

  return l
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    