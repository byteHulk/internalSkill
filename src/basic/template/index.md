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
动态规划和递归或者分治没有根本上的区别(关键看有无最优子结构)
共性：找到重复子问题
一般都是需要求最优解，DP 和分治的区别也在这，DP 拥有最优子结构

**注意** 使用滚动数组可以优化空间复杂度，可以只存储题目要求的数组，而不需要存储整个数组的结果
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

## 岛屿陆地问题(网格遍历)
```
void dfs(int[][] grid, int r, int c) {
    // 判断 base case
    if (!inArea(grid, r, c)) {
        return;
    }
    // 如果这个格子不是岛屿，直接返回
    if (grid[r][c] != 1) {
        return;
    }
    grid[r][c] = 2; // 将格子标记为「已遍历过」
    
    // 访问上、下、左、右四个相邻结点
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}

// 判断坐标 (r, c) 是否在网格中
boolean inArea(int[][] grid, int r, int c) {
    return 0 <= r && r < grid.length 
        	&& 0 <= c && c < grid[0].length;
}
```



### BFS 广度优先搜索
<!-- 100. 可能有两个队列 -->



### 哈希表



### tree 基本操作

https://leetcode-cn.com/problems/same-tree/solution/xie-shu-suan-fa-de-tao-lu-kuang-jia-by-wei-lai-bu-/

### 代码规范模版

<!-- 先写主干逻辑 再去完善细节 -->
<!-- 自顶向下编程 主干逻辑(新闻稿方式) -->