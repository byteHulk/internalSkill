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



### DFS 深度优先搜索



### BFS 广度优先搜索
<!-- 100. 可能有两个队列 -->



### 哈希表


### tree 基本操作

https://leetcode-cn.com/problems/same-tree/solution/xie-shu-suan-fa-de-tao-lu-kuang-jia-by-wei-lai-bu-/