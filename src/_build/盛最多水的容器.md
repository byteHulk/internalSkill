## 11 盛最多水的容器

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：双指针
寻求面积最大就是，查找宽高最大。记录左右高度和宽度。循环比较面积大小。


```js
var maxArea = function(height) {
    let left =0 ;
    let right = height.length-1;
    let max = 0;

    while(left<right){
        let width = right-left;
        let h = Math.min(height[left],height[right]);
        max = Math.max(max,width*h);
        if(height[left]<height[right]){
            left++;
        } else {
            right--;
        }
    };
    return max
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    