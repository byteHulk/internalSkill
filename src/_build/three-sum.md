## 15 三数之和

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：暴力法/枚举法
三层遍历枚举所有出可能性，满足相加即记录下标值,再利用哈希表进行去重，好家伙，直接超时

```
var threeSum = function (nums) {
  const len = nums.length
  if (len < 3) return []

  let res = []
  let map = {}

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let z = j + 1; z < len; z++) {
        if (nums[i] + nums[j] + nums[z] === 0) {
            let tmpSortStr = String([nums[i],nums[j],nums[z]].sort())
            if(!(tmpSortStr in map)){
                res.push([nums[i], nums[j], nums[z]])
                map[tmpSortStr] = 0
            }
        }
      }
    }
  }
  return res
}
```

#### 算法复杂度分析
- 时间复杂度: 嵌套循环O(n^3)
- 空间复杂度：O(n) 哈希表开销和结果数组开销
&nbsp;
### 解法二：哈希表
先挖个坑
```

```

#### 算法复杂度分析
- 时间复杂度：O()
- 空间复杂度：O() 
&nbsp;
### 解法三：双指针法
问题转化：a + b = -c
先把数组排好序，然后采用k,i,j三个指针，其中固定最小的k，i指向k右边的元素，j指向数组最后一个元素
- 如果 nums[k] > 0，则break跳过这次循环，因为k为本次遍历的最小元素，即后面三个元素相加一定不会等于零
- 如果 k > 0且nums[k] === nums[k - 1]则break跳过这次循环，因为已经把nums[k - 1]的结果都加入组合中了，本次搜索只会得到重复的组合
- 如果 nums[i] + nums[j] + nums[k] > 0 说明i,j指向的元素和值偏大，则j--并跳过本次循环中相邻两个元素相同的结果
- 如果 nums[i] + nums[j] + nums[k] < 0 说明i,j指向的元素和值偏小，则i++并跳过本次循环中相邻两个元素相同的结果
- 如果 nums[i] + nums[j] + nums[k] === 0 记录组合[k,i,j]至res，执行i++，j--防止记录到重复的组合
```
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [i, map[nums[i]]]
    }else{
        map[target - nums[i]] = i
    }
  }
}
```

#### 算法复杂度分析
- 时间复杂度：O(n^2) k遍历复杂度O(n) i,j遍历复杂度O(n)
- 空间复杂度：O(n) 排序时间复杂度为O(logN) 修改了原数组，但实际不一定允许，所以可以看成O(n)的空间复杂度
&nbsp;