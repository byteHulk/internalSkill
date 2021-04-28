## 11 盛水最多的容器

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：暴力法/枚举法
创建并维护两个指针i、j，枚举数组里的两根柱子，最短的那根的高度乘以两个柱子间的距离，可得到水的体积，最后结果取最大值即可。

```
var maxArea = function (height) {
  let max = 0

  for(let i = 0;i < height.length;i++){
    for(let j = i + 1;j < height.length;j++){
      let h = Math.min(height[i],height[j])
      let w = j - i
      max = Math.max(max,h*w)
    }
  }
  return max
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 嵌套循环O(n^2)
- 空间复杂度：O(1) 
&nbsp;
### 解法二：双指针法
由木桶短板原理可以排除一些柱子的组合，利用双指针法我们可以缩减搜索空间，将时间复杂度优化到O(n)，向间收敛，左右夹逼
```
var maxArea = function (height) {
  let max = 0

  for(let i = 0,j = height.length - 1;i < j;){
    let minHeight = height[i] < height[j] ? height[i++]:height[j--]
    max = Math.max(max,(j - i + 1) * minHeight)
  }
  return max
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 只需要遍历一次数组O(n)，帅气
- 空间复杂度：O(1) 无需创建新数组，空间复杂度为O(1)
&nbsp;