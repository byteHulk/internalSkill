## 1109 航班预订统计

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：查分
预订记录实际上代表了一个区间的增量,将这些增量叠加即可得到答案。因此可以使用差分解决本题。

差分数组对应的概念是前缀和数组，对于数组 [1,2,2,4][1,2,2,4]，其差分数组为 [1,1,0,2][1,1,0,2]，差分数组的第 ii 个数即为原数组的第 i-1i−1 个元素和第 ii 个元素的差值，也就是说对差分数组求前缀和即可得到原数组。

```js
var corpFlightBookings = function(bookings, n) {
    //差分数组求前缀和
    //d[l] + inc | d[r + 1] -inc
    //d[l - 1] + ic | d[r] -inc !!数组右下标越界问题
    let nums = new Array(n).fill(0)
    for(let booking of bookings){
        nums[booking[0] - 1] += booking[2]
        if(booking[1] < n){
            nums[booking[1]] -= booking[2]
        }
    }

    for(let i = 1;i < n;i++){
        nums[i] += nums[i - 1]
    }
    return nums
};
```

#### 算法复杂度分析
- 时间复杂度：O(n+m)，其中 n 为要求的数组长度，m 为预定记录的数量。需要对于每一条预定记录处理一次差分数组，并最后对差分数组求前缀和。
- 空间复杂度：O(1) 
&nbsp;
    