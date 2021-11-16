## 242 有效的字母异位词

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：哈希表 or 排序比较字符串


```js
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const map = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]]--
    else return false
  }

  return true
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
    