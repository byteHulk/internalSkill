## 560 和为 K 的子数组

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：前缀和 + 哈希表
算法使用了一个 Map（mp）来记录数组元素的前缀和以及对应的出现次数。步骤如下：

创建一个 Map mp，并将键 0 的值设为 1，用于记录和为 0 的子数组个数（即空数组）。

使用变量 count 记录符合条件的子数组个数，pre 用于记录当前的前缀和。

遍历输入数组 nums，对每个元素进行以下操作：

计算当前的前缀和 pre，累加当前元素 x。

检查 Map mp 中是否存在 pre - k，即是否存在一个前缀和使得 pre - (pre - k) = k。如果存在，则说明有子数组的和为 k，将对应的出现次数累加到 count 中。

更新 Map mp，如果当前前缀和 pre 已经在 Map 中存在，则将其对应的出现次数加一；如果不存在，则将其添加到 Map 中，并将出现次数设置为 1。

返回符合条件的子数组个数 count。

--
使用前缀和的方法可以解决这个问题，因为我们需要找到和为k的连续子数组的个数。通过计算前缀和，我们可以将问题转化为求解两个前缀和之差等于k的情况。

假设数组的前缀和数组为prefixSum，其中prefixSum[i]表示从数组起始位置到第i个位置的元素之和。那么对于任意的两个下标i和j（i < j），如果prefixSum[j] - prefixSum[i] = k，即从第i个位置到第j个位置的元素之和等于k，那么说明从第i+1个位置到第j个位置的连续子数组的和为k。

通过遍历数组，计算每个位置的前缀和，并使用一个哈希表来存储每个前缀和出现的次数。在遍历的过程中，我们检查是否存在prefixSum[j] - k的前缀和，如果存在，说明从某个位置到当前位置的连续子数组的和为k，我们将对应的次数累加到结果中。

这样，通过遍历一次数组，我们可以统计出和为k的连续子数组的个数，并且时间复杂度为O(n)，其中n为数组的长度。

```js
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    