## 125. 验证回文串

### 前言
本题考察的是对字符(串)api和基础算法的熟练程度

### 解法一：过滤 反转 比较
最直接的解法是对字符串进行一次遍历，并将其中的字母和数字字符进行保留，然后反转字符串，接着只需比较两个字符串是否相等即可确认该字符串是否是一个回文串。

```var isPalindrome = function (s) {
  //自顶向下编程 主干逻辑(新闻稿方式)
  //1.filter out invalid char 2.reverse and compare

  let filteredS = s.replace(/[^a-z0-9]/ig,'').toLowerCase()

  let reversedS = filteredS.split('').reverse().join('')

  let isEqual = filteredS === reversedS

  return isEqual
}
```

### 算法复杂度分析
- 时间复杂度：O(n) 需要遍历一次字符串，n是字符串的长度
- 空间复杂度：O(n) 由于需要把过滤的字符和数字放到一个字符串当中，因此需要使用 O(n) 的空间

### 解法二：双指针解法
双指针解法只用遍历一次字符串即可判断是否为回文字符串，不用创建新字符串

```
var isPalindrome = function (s) {
  //自顶向下编程 主干逻辑(新闻稿方式)
  //1.too pointer to center 2.skip invaild chart and compare 3.too pointer meet true

  const len = s.length
  const isVaildChar = (c) => /[a-z0-9]/gi.test(c)
  let [left, right] = [0, len - 1]

  while (left < right) {
    const l = s[left].toLowerCase()
    const r = s[right].toLowerCase()
    let isLeftVaild = isVaildChar(l)
    let isRightVaild = isVaildChar(r)

    if (!isLeftVaild) {
      left++
      continue
    }

    if (!isRightVaild) {
      right--
      continue
    }
    
    if (l !== r) {
      return false
    }

    left++
    right--
  }
  return true
}
```

### 算法复杂度分析
- 时间复杂度：O(n) 需要遍历一次字符串，n是字符串的长度
- 空间复杂度：O(n) 由于需要把过滤的字符和数字放到一个字符串当中，因此需要使用 O(n) 的空间

### 解法三：单跨度指针解法
由于是前后比较字符串，所以我们可以采用一个跨度指针来定位前后两个字符的位置

```
var isPalindrome = function (s) {
    //自顶向下编程 主干逻辑(新闻稿方式)
    //1.filter out invaild char  2.forwards backwards  compare
    const newStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    for(let i = 0;i < newStr.length - 1;i++){
        if(newStr[i] !== newStr[newStr.length - i - 1]) return false
    }
    return true
  }
```

### 算法复杂度分析
- 时间复杂度：O(n) 需要遍历一次字符串，n是字符串的长度
- 空间复杂度：O(n) 由于需要把过滤的字符和数字放到一个字符串当中，因此需要使用 O(n) 的空间