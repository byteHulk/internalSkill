## 76 最小覆盖子串

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：双指针法
将题目拆解可以分为下面几步:
- 检查 s 字符串是否包含双指针中的字符串
  - 用一个 map 保存 t 字符串所需字母的次数
  - 用一个 count === 0 表示所需的字母都已覆盖
- 双指针遍历
  - 当 count 不为 0 时, 则将 s[right] 字母取出来, 做一次检查是否包含的步骤
  - 当 count 为 0 时, 证明所需的字母都已覆盖,这时将左指针的字母提取出来,做一次检查是否包含的步骤(没有就 - 1), 同时将字符串和 min 结果串做对比, 保存最小的结果

时间复杂度:
初始化 map -> O(tLen)
主循环 -> O(sLen)

```js
var minWindow = function (s, t) {
  // 边界条件
  const sLen = s.length,
    tLen = t.length

  // if (tLen > sLen) return ""
  // if (tLen === 1) return s.includes(t) ? t : ""

  const map = t
    .split("")
    .reduce((acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {})

  let count = Object.keys(map).length

  let left = 0,
    right = 0,
    min = ""

  while (right <= sLen) {
    if (count === 0) {
      let cur = s[left]

      if (cur in map) map[cur]++

      if (map[cur] > 0) count++

      let tmp = s.slice(left, right)

      if (min === "") min = tmp
      else min = tmp.length < min.length ? tmp : min

      left++
    } else {
      let cur = s[right]

      if (cur in map) map[cur]--

      if (map[cur] === 0) count--

      right++
    }
  }

  return min
}
```

#### 算法复杂度分析
- 时间复杂度：O(m + n)
- 空间复杂度：O(1) 
&nbsp;
    