## 算法模版总结

### 递归

```js
    const recursion = (level,param) => {

        //递归终止条件 (terminator)
        if(level > MAX_LEVEL){
            //处理结果 (process result)
            return;
        }

        // 处理当前层逻辑 (process current logic)
        process(level,param);

        //递归到下一层 (drill down)
        recursion(level: level + 1, newParam);

        //恢复当前状态 (restore current status)
        
    }
```

### 分治


### 动态规划


### 回溯
DFS 是一个劲的往某一个方向搜索，而回溯算法建立在 DFS 基础之上的，但不同的是在搜索过程中，达到结束条件后，恢复状态，回溯上一层，再次搜索。因此回溯算法与 DFS 的区别就是有无状态重置

## 如何进行回溯法 
①画出递归树，找到状态变量(回溯函数的参数)，这一步非常重要※
②根据题意，确立结束条件
③找准选择列表(与函数参数相关),与第一步紧密关联※
④判断是否需要剪枝
⑤作出选择，递归调用，进入下一层
⑥撤销选择

这里参考：https://leetcode-cn.com/problems/subsets/solution/c-zong-jie-liao-hui-su-wen-ti-lei-xing-dai-ni-gao-/show-me-the-code-2

```js
var backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }
    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果 // 回溯的话多了个撤销处理结果
    }
}
```
### DFS 深度优先搜索



### BFS 广度优先搜索
<!-- 100. 可能有两个队列 -->



### 哈希表



### tree 基本操作

https://leetcode-cn.com/problems/same-tree/solution/xie-shu-suan-fa-de-tao-lu-kuang-jia-by-wei-lai-bu-/

### 代码规范模版

<!-- 先写主干逻辑 再去完善细节 -->
<!-- 自顶向下编程 主干逻辑(新闻稿方式) -->