/*
 * @Author: HuangBoWen
 * @Date: 2022-03-28 09:14:43
 * @LastEditors: HuangBoWen
 * @LastEditTime: 2022-03-28 16:28:44
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new Heap(nums)

  for (let i = 1; i < k; i++) {
    heap.remove()
  }

  return heap.remove()
}

class Heap {
  constructor(array) {
    this.heap = array
    this.heapify()
  }

  heapify() {
    const firstParent = Math.floor((this.heap.length - 2) / 2)
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i)
    }
  }

  remove() {
    const arr = this.heap
    this.swap(0, this.heap.length - 1)
    const min = this.heap.pop()
    this.siftDown(0)
    return min
  }

  siftDown(i) {
    let childIdx = this.getMinChildIdx(i)
    while (childIdx < this.heap.length && this.heap[childIdx] > this.heap[i]) {
      this.swap(i, childIdx)
      i = childIdx
      childIdx = this.getMinChildIdx(i)
    }
  }

  getMinChildIdx(i) {
    const left = 2 * i + 1
    const right = 2 * i + 2
    if (this.heap[right] === undefined || this.heap[left] > this.heap[right])
      return left
    else return right
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}
// @lc code=end
