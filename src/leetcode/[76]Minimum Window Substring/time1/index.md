## 76 最小覆盖子串

### 前言
本题主要考察数组的API及滑动窗口算法的理解和使用


### 解法一：滑动窗口
使用滑动窗口法来求解,需要注意的是边界条件和下标的设置. 当窗口内不覆盖 t 字符串就移动右指针指向下一位,当窗口内覆盖 t 字符串就记录下 min 的值,并把左指针往右移一位, 这里有个空间换时间的方法是用 count 存储需要的字符数

```js
var minWindow = function (s, t) {
  let left = (right = 0),
    min = ""

  let map = t
    .split("")
    .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})

  let count = Object.keys(map).length

  while (right <= s.length) {
    if (count === 0) {
      let current = s[left]

      if(current in map) map[current]++

      if(map[current] > 0) count++

      let tmp = s.slice(left, right)

      if (min === "") min = tmp
      else min = tmp.length < min.length ? tmp : min

      left++
    } else {
      let current = s[right]

      if(current in map) map[current]--

      if(map[current] === 0) count--

      right++
    }
  }

  return min
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    