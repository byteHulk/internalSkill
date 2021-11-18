## 300 最长递增子序列

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：DP


```js
function lengthOfLIS(nums) {
	var lis = [];
	for (var i = 0; i < nums.length; i++) {
		lis.push(1);
		for (var j = 0; j < i; j++) {
			if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
		}
	}
	return nums.length ? Math.max.apply(null, lis) : 0;
}
```

#### 算法复杂度分析
- 时间复杂度：O(n^2)
- 空间复杂度：O(1) 
&nbsp;
    