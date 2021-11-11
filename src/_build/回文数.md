## 9 回文数

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：数字字符串数组转换
将数字转为数组取反后转回数字，与之相比较。

```js
var isPalindrome = function(x) {
    let palindrome = x.toString().split('').reverse().join('');
    return x.toString() === palindrome ? true:false;
};
```
#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 

### 解法二：取数字长度，头尾比较。
先获取数字的数量级，在将头尾比较。

```js
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let l = 10 ** (x.toString().length-1);
    while(x>0 && l>0){
        if(Math.floor(x/l) !== x%10) return false
        x = Math.floor((x%l)/10);
        l /= 100;
    };
    return true
}
```
#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 

### 解法三：leetcode高分答案
利用循环将数字反转，再于原数比较

```js
var isPalindrome = function(x) {
  if (x < 0) return false

  let rev = 0
  for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
  return rev === x
};
```
#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    