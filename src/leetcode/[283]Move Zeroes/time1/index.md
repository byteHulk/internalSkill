## 283 移动零问题

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：暴力法
创建一个计数器n，第一次遍历的时候n用来记录当前有多少0元素。即遍历的时候每遇到一个0元素就将其在数组移除，第一次遍历完后，n就是非零的数量，然后在数组后面push n个零

```
var moveZeroes = function (nums) {
  if (nums == null || nums.length == 0) return

  let n = 0

  for(let i = 0; i< nums.length;i++){
    if(nums[i] === 0){
      nums.splice(i,1)
      i--
      n++
    }
  }
  while(n > 0){
    nums.push(0)
    n--
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 最坏的情况为O(2n)的复杂度
- 空间复杂度：O(1) 无需创建新数组，空间复杂度为O(1)
&nbsp;
### 解法二：双指针法
遍历数组一次，左指针指向被序列化好的位置，右指针指向下一个元素，若右指针的元素不为零则将左右元素互换位置，左指针加1，否则右指针加1
```var moveZeroes = function (nums) {
  if (nums == null || nums.length == 0) return
  //1.left pointer points head , right pointer points tail
  //2.swap two ele

  //l = 0,r = !0
  //l = !0,r = 0
  //l = !0,r = !0

  let left = 0,
    right = 0

  while (right < nums.length) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n) 需要遍历一次数组O(n)，交换元素为O(1)的时间复杂度
- 空间复杂度：O(1) 无需创建新数组，空间复杂度为O(1)
&nbsp;
### 解法三：sort方法
直接使用数组的sort API
如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前

```var moveZeroes = function (nums) {
  if (nums == null || nums.length == 0) return
  nums.sort((a,b) => b ? 0 :-1)
}
```

#### 算法复杂度分析
- 时间复杂度：O(n^2) 需要遍历一次数组O(n)，但会多次交换元素，最坏情况下为O(n^2)
- 空间复杂度：O(1) 无需创建新数组，空间复杂度为O(1)