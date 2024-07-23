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
    queue = [init];
  const seen = new Set([init]);

  while (queue.length) {
    step++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const status = queue.shift();

      for (let nextStatus of rotate(status)) {
        if (!seen.has(nextStatus) && !dead.has(nextStatus)) {
          if (nextStatus === target) return step;

          queue.push(nextStatus);
          seen.add(nextStatus);
        }
      }
    }
  }
  return -1
};

const numPrev = (x) => (x === '0' ? '9' : (parseInt(x) - 1) + '');
const numNext = (x) => (x === '9' ? '0' : (parseInt(x) + 1) + '');

// 枚举每个位置前后旋转一次后的状态
const rotate = (status) => {
  const ret = [];
  const array = Array.from(status);

  for (let i = 0; i < 4; i++) {
    const num = array[i];

    array[i] = numPrev(num);
    ret.push(array.join(''));
    array[i] = numNext(num);
    ret.push(array.join(''));

    array[i] = num;
  }

  return ret;
};

// @lc code=end
