## 222 完全二叉树的节点个数

### 前言
本题主要考察二叉树基础算法的理解和使用


### 解法一：二分查找 + 位运算


```js
 const exists = (root, level, k) => {
    let bits = 1 << (level - 1);
    let node = root;
    while (node !== null && bits > 0) {
        if (!(bits & k)) {
            node = node.left;
        } else {
            node = node.right;
        }
        bits >>= 1;
    }
    return node !== null;
}

var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    let level = 0;
    let node = root;
    while (node.left !== null) {
        level++;
        node = node.left;
    }
    let low = 1 << level, high = (1 << (level + 1)) - 1;
    while (low < high) {
        const mid = Math.floor((high - low + 1) / 2) + low;
        if (exists(root, level, mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;
};
```

#### 算法复杂度分析
- 时间复杂度：O(log^2 n)
- 空间复杂度：O(1) 
&nbsp;
    