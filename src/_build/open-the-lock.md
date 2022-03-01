## 753 打开转盘锁

### 前言
本题主要考察广度优先基础算法的理解和使用


### 解法一：bfs


```js
 var openLock = function(deadends, target) {
  if (target === '0000') {
      return 0;
  }

  const dead = new Set(deadends);
  if (dead.has("0000")) {
      return -1;
  }

  let step = 0;
  const queue = [];
  queue.push("0000");
  const seen = new Set();
  seen.add("0000");

  while (queue.length) {
      ++step;
      const size = queue.length;
      for (let i = 0; i < size; ++i) {
          const status = queue.shift();
          for (const nextStatus of get(status)) {
              if (!seen.has(nextStatus) && !dead.has(nextStatus)) {
                  if (nextStatus === target) {
                      return step;
                  }
                  queue.push(nextStatus);
                  seen.add(nextStatus);
              }
          }
      }
  }

  return -1;
};

const numPrev = (x) => {
  return x === '0' ? '9' : (parseInt(x) - 1) + '';
}

const numSucc = (x) => {
  return x === '9' ? '0' : (parseInt(x) + 1) + '';
}

// 枚举 status 通过一次旋转得到的数字
const get = (status) => {
  const ret = [];
  const array = Array.from(status);
  for (let i = 0; i < 4; ++i) {
      const num = array[i];
      array[i] = numPrev(num);
      ret.push(array.join(''));
      array[i] = numSucc(num);
      ret.push(array.join(''));
      array[i] = num;
  }
  console.log(ret,'---------ret')
  return ret;
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(1) 
&nbsp;
    