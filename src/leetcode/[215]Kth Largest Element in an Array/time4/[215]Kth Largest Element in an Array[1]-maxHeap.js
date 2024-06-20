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
    let lastNodeIndex = Math.floor((this.heap.length - 2) / 2)
    for (let i = lastNodeIndex; i >= 0; i--) {
      this.siftDown(i)
    }
  }

  siftDown(i) {
    let maxChildIndex = this.getMaxChildIndex(i)

    while (
      maxChildIndex < this.heap.length &&
      this.heap[maxChildIndex] > this.heap[i]
    ) {
      this.swap(i, maxChildIndex)
      i = maxChildIndex
      maxChildIndex = this.getMaxChildIndex(i)
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1)
    let top = this.heap.pop()
    this.siftDown(0)
    return top
  }

  getMaxChildIndex(i) {
    let left = i * 2 + 1
    let right = i * 2 + 2

    if (this.heap[right] === undefined || this.heap[left] > this.heap[right]) {
      return left
    } else {
      return right
    }
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

// @lc code=end
