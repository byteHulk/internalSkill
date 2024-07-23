## 15 三数之和

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：排序 + 剪枝
- 对数组进行排序，注意不要影响到原数组（后面对数字数组的题都可以考虑下排序造成的特性）
- 由于排序后造成的特性，如果当前枚的 i > target 说明永远不可能相加 = target，或者前面已经枚举出来了
- 两次去掉重复数字的操作，一次是i，一次是 j k
- 根据相加的结果大小判断是移动 j 还是 k


```js
var threeSum = function (nums, target = 0) {
  const len = nums.length;
  if (len < 3) return [];

  let result = [];
  nums = nums.toSorted((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > target) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1,
      k = len - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    