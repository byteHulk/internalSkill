## 225 用队列实现栈

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：用数组方法模拟


```js
    var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let ans = this.queue.pop();
    // // 将主队列除最后以一个数外的所有数传入副队列 （由前往后传 用unshift）
    // while(this.queue.lenght >1){
    //     this._queue.push(this.queue.shift())
    // }
    // let ans = this.queue.shift();
    // // 将副队列所有数推回主队列
    // while(this._queue.lenght) {
    //     this.queue.push(this._queue.shift())
    // }
    return ans 
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.slice(-1)[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length;
};
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    