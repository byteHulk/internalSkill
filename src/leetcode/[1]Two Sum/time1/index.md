## 1 两数之和

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：暴力法/枚举法
两层遍历枚举所有出可能性，满足相加即记录下标值

```
var twoSum = function(nums, target) {
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};
```

#### 算法复杂度分析
- 时间复杂度: 嵌套循环O(n^2)
- 空间复杂度：O(1) 
&nbsp;
### 解法二：哈希表
先用哈希表存储一遍，再查找就是O(1)的时间复杂度了
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
- 时间复杂度：O(n) 对于每个元素，我们只需要O(1)的时间复杂度去找target - x
- 空间复杂度：O(n) 主要为创建哈希表开销
&nbsp;