## 6 Z 字形变换

### 前言
按照与逐行读取 Z 字形图案相同的顺序访问字符串

### 解法一：双指针法
采用双指针加标志位来求解，遍历一次字符串，i指向数组下表，j指向行数，标志位表明下次循环j的方向

```
var convert = function (s, numRows) {
  if (numRows == 1) return s

  const rows = new Array(numRows).fill("")
  let isDown = false

  for (let i = 0, j = 0; i < s.length; i++) {
    rows[j] += s[i]
    if(j === 0 || j === numRows - 1) isDown = !isDown
    isDown ? j++ : j--
  }
  return rows.join("")
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 遍历一次字符串
- 空间复杂度：O(n) 存储排序好的字符串
&nbsp;
### 解法二：V字循环法
以 V 字型为一个循环, 循环周期为 n = (2 * numRows - 2) （2倍行数 - 头尾2个）
对于字符串索引值 i，计算 x = i % n 确定在循环周期中的位置
则行号 y = min(x, n - x)

```
var convert = function (s, numRows) {
  if (numRows == 1) return s

  const rows = new Array(numRows).fill("")
  const n = 2 * numRows - 2
  for (let i = 0; i < s.length; i++) {
    const x = i % n
    rows[Math.min(x, n - x)] += s[i]
  }
  return rows.join("")
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 遍历一次字符串
- 空间复杂度：O(n) 存储排序好的字符串
&nbsp;