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


### 回溯

```js
var backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }
    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```

### 动态规划



### DFS 深度优先搜索



### BFS 广度优先搜索
<!-- 100. 可能有两个队列 -->



### 哈希表



### tree 基本操作

https://leetcode-cn.com/problems/same-tree/solution/xie-shu-suan-fa-de-tao-lu-kuang-jia-by-wei-lai-bu-/

### 代码规范模版

<!-- 先写主干逻辑 再去完善细节 -->
<!-- 自顶向下编程 主干逻辑(新闻稿方式) -->