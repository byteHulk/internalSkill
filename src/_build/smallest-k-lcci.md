## 1000021 最小K个数

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：快排

```js
var smallestK = function (arr, k) {
  if(k === 0) return []
  if (k >= arr.length) return arr
  
  const quickSort = (arr,k) => {
    let len = arr.length
    if (len === 0) {
      return []
    }
    let lesser = []
    let greater = []
    let pivot = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lesser.push(arr[i])
      } else {
        greater.push(arr[i])
      }
      if(lesser.length - 1 >= k){
          break
      }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater.slice(0,lesser.length - 1 - k)))
  }
  return quickSort(arr,k).slice(0, k)
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n) 
&nbsp;
    