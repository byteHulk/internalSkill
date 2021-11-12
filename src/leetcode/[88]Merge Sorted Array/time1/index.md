## 88 合并两个有序数组

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：双指针
创建新数组利用双指针进行两个有序数组合并

```js
var merge = function(nums1, m, nums2, n) {
    let sorted = new Array(m + n).fill(0)
    let mp = 0
    let np = 0
    let cp = 0

    while(mp < m || np < n){
        if(mp === m){
            sorted[cp] = nums2[np++]
        }else if(np === n){
            sorted[cp] = nums1[mp++] 
        }else if(nums1[mp] < nums2[np]){
            sorted[cp] = nums1[mp++]
        }else{
            sorted[cp] = nums2[np++]
        }
        cp++
    }
    for (let i = 0; i != m + n; ++i) {
        nums1[i] = sorted[i];
    }
};
```

#### 算法复杂度分析
- 时间复杂度：O(m + n)
- 空间复杂度：O(m + n) 
&nbsp;
### 解法一：逆双指针
利用nums1后几位为空，逆向使用双指针进行合并，优化空间复杂度到O(1)

```js
var merge = function (nums1, m, nums2, n) {
  let mp = m - 1,
    np = n - 1
  let tail = m + n - 1

  while (tail >= 0) {
    if (mp === -1) {
      nums1[tail] = nums2[np--]
    } else if (np === -1) {
      nums1[tail] = nums1[mp--]
    } else if (nums1[mp] > nums2[np]) {
      nums1[tail] = nums1[mp--]
    } else {
      nums1[tail] = nums2[np--]
    }
    tail--
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(m + n)
- 空间复杂度：O(1) 
&nbsp;