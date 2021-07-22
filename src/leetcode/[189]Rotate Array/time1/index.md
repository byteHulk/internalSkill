## 189 旋转数组

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：新数组
由于直接替换位置会导致元素原始值被覆盖，所以遍历数组，将元素的正确位置放到新数组中，最后再将新数组赋值给原数组

```js
var rotate = function (nums, k) {
  //i + k mode len
  let len = nums.length
  let arr = Array(len)

  for (let i = 0; i < len; i++) {
    arr[(i + k) % len] = nums[i]
  }
  for (let i = 0; i < len; ++i) {
    nums[i] = arr[i]
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 
- 空间复杂度：O(n) 最坏情况下复制整个数组
&nbsp;

### 解法二：temp
之所以用新数组来存储，就是因为直接替换会影响元素原始值，所以可以优化为temp临时存储元素

```js
var rotate = function (nums, k) {
  let len = nums.length
  let count = 0
  let start = 0

  while (count !== len) {
    let current = start
    let prev = nums[start]
    do {
      const next = (current + k) % len
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
      count++
    } while (start !== current)
    start++
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;

### 解法三：翻转数组
先翻转整个数组，再翻转0 , k mod n - 1,接着翻转k mod n, n - 1 就可得到答案了

```js
//翻转数组
  const reverse = (arr, start, end) => {
    while (start < end) {
      const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp

      start += 1
      end -= 1
    }
  }
  let n = nums.length
  //翻转整个数组
  reverse(nums, 0, n - 1)

  //翻转0,k mod n - 1
  reverse(nums, 0, (k % n) - 1)

  //翻转k mod n , n - 1
  reverse(nums, k % n, n - 1)
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 常数级空间
&nbsp;