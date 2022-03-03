## 155 最小栈

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：新开辟一个最小栈
也可以 push 一个对象进去，对象里存着一个最小值

```js
/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function() {
    this.x_stack = [];
    this.min_stack = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.x_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.x_stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.x_stack[this.x_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min_stack[this.min_stack.length - 1];
};
```

#### 算法复杂度分析
- 时间复杂度：O(1)
- 空间复杂度：O(n) 
&nbsp;
    