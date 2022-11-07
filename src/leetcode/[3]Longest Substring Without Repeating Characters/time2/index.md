## 3 无重复字符的最长子串

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：滑动窗口
枚举左指针，在内层循环枚举右指针


```js
var lengthOfLongestSubstring = function (s) {
  let max = (l = r = 0),
    len = s.length,
    map = {}

  //左指针逻辑
  while(l < len){
    map = {}
    //移动右指针逻辑
    while(r < len - l){
      const cur = s[l + r]

      if(!(cur in map)) break
      else map[cur] = 0

      max = Math.max(Object.keys(map).length,max)
      
      r++

    }

    r = 0
    l++
  }

  return max
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
### 解法二：哈希优化
用哈希表来存储访问过的字符，重复则从新计算 max


```js
var lengthOfLongestSubstring = function (s) {
  let visited = {}

  let max = (start = 0)

  for (let i in s) {
    if (s[i] in visited){
        start = Math.max(visited[s[i]] + 1, start)
    }

    visited[s[i]] = Number(i)

    max = Math.max(i - start + 1, max)
  }

  return max
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    