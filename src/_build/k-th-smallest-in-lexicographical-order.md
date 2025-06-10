## 440 字典序的第K小数字

### 前言
本题主要考察字典树及基础算法的理解和使用


### 解法一：字典树
按数字 base 构建字典数，如果在当前 base 下包含第 k 小的数字，则将 base * 10，也就是将当前 root 减去；如果不包含则直接将 base + 1，进行下一个序列的查找，同时目标 k 减去个上一个 base 的字典树节点数，当目标 k = 0，即获取到第 k 小的数字

```js
var findKthNumber = function (n, k) {
  let cur = 1
  k--
  while(k > 0){
    let preTreeCount = getPreTreeCount(cur,n)
    if(preTreeCount <= k){
        k -= preTreeCount;
        cur++
    }else{
        cur = cur * 10
        k--
    }
  }

  return cur
};

const getPreTreeCount = (cur,n) => {
    let sum = 0
    let first = cur
    let last = cur

    while(first <= n){
        sum+= Math.min(last,n) - first + 1
        first = first * 10
        last = last * 10 + 9
    }

    return sum
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    