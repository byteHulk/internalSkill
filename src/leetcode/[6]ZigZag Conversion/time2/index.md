## 6 N 字形变换

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：双指针
有个表示升降序的标识位, 再有就是要注意边界细节, 不能浮躁


```js
var convert = function (s, numRows) {
  if (numRows === 1) return s

  let rows = new Array(numRows).fill(""),
    isDown = false,
    layer = 0

  for (let i of s) {
    rows[layer] += i

    if (layer === 0 || layer === numRows - 1) isDown = !isDown

    isDown ? layer++ : layer--
  }

  return rows.join("")
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    