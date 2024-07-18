## 5 最长回文子串

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：中心扩散法
枚举每个字符，然后在这个字符进行左右扩散，看看每个字符为中心的最长回文串是多少，保留最长的那个


```js
var longestPalindrome = function (s) {
  let ll = 0,
    rr = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i + 1]) {
      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
        [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];
      }
    }
  }

  return s.substring(ll, rr + 1);
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    