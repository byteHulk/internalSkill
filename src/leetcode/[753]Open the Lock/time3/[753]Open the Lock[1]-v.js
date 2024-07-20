/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target, init = '0000') {
  if (target === init) return 0;

  const dead = new Set(deadends);
  if (dead.has(init)) return -1;

  let step = 0,
    queue = [];
  queue.push(init);
  const seen = new Set();
  seen.add(init);

  while (queue.length) {
    step++;
    const size = queue.length;

    for (let i = 0; i < size; ++i) {
      const status = queue.shift();

      for (let nextStatus of get(status)) {
        if (!seen.has(nextStatus) && !dead.has(numNext)) {
          if (target === nextStatus) return step;
          queue.push(nextStatus);
          seen.add(nextStatus);
        }
      }
    }
  }

  return -1;
};

const numPrev = (x) => (x === '0' ? '9' : parseInt(x) - 1 + '');
const numNext = (x) => (x === '9' ? '0' : parseInt(x) + 1 + '');

// 枚举旋转一次后可能的状态
const get = (status) => {
  const ret = [];
  let arr = Array.from(status);
  for (let i = 0; i < 4; i++) {
    const num = arr[i];
    arr[i] = numPrev(num);
    ret.push(arr.join(''));
    arr[i] = numNext(num);
    ret.push(arr.join(''));
    arr[i] = num;
  }

  return ret;
};
// @lc code=end
