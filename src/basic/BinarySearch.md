```c
class Solution {
public:
    /*
        求第一个>=target的目标值位置
    */
    //闭区间[left, right]
    int lower_bound1(vector<int>& nums, int target){
        int l = 0, r = nums.size() - 1;
        while(l <= r){  // [a, a] 区间不为空边界
            int mid = (l + r) / 2;
            if(nums[mid] < target){
                l = mid + 1; //L - 1 < target (区间[0, l - 1]的值 < target)
            }else{
                r = mid - 1; //R + 1 >= target(区间[r + 1, end]的值 >= target)
            }
        }
        return l; //return (r + 1);
    }
    //左闭右开区间[left, right)
    int lower_bound2(vector<int>& nums, int target){
        int l = 0, r = nums.size();
        while(l < r){   // [a, a + 1) 区间不为空边界
            int mid = (l + r) >> 1;
            if(nums[mid] < target){
                l = mid + 1;
            }else{
                r = mid; //此时左闭右开，注意r指向的应该为右区间的)值 R >= target
            }
        }
        return l; //return r;
    }
    //开区间(l ,r)
    int lower_bound3(vector<int>& nums, int target){
        int l = -1, r = nums.size();
        while(l + 1 < r){  // (a, a + 2) 区间不为空边界
            int mid = (l + r) >> 1;
            if(nums[mid] < target){
                l = mid; //L < target
            }else{
                r = mid; //R >= target
            }
        }
        return l + 1; //return r;
    }
    vector<int> searchRange(vector<int>& nums, int target) {
        int start = lower_bound3(nums, target); //寻找第一个>=target的位置
        if(start < 0 || start >= nums.size() || nums[start] != target) return {-1, -1};
        int end = lower_bound3(nums, target + 1) - 1;//寻找最后一个target位置，也就是寻找第一个<target + 1的位置
        return {start, end};
    }
};

/*
    二分查找的关键：循环不变量！！！
    不变量：区间外面（左右侧）的元素性质
    *关键不在于区间里的元素具有什么性质，而是区间外面的元素具有什么性质*

    二分查找有三种常见写法：
    (1)闭区间[l, r]
    (2)左闭右开[l , r)
    (3)开区间(l , r)
    不同的写法区别就在于“不变量”！（注意循环的条件：区间不为空，注意区间是否为空的边界判断）

    本题的lower_bound()函数实现的是非递减整数数组中求第一个>=target的位置
    如果是">""<""<="的话该如何应对呢？
    （四种类型可以相互转换）
    >x： 转换为>=(x + 1) （前提：数组中都是整数）
    <x： 转换为(>=x) - 1 （求出>=x的位置后左边一个数的位置就是<x
    <=x：转换为(>x) - 1

    Tips:
    在求mid时可能会出现溢出问题（Java,C++,C）
    可写为“先减后加”的形式，避免溢出
    mid = (l + (r - l)) / 2
*/
```