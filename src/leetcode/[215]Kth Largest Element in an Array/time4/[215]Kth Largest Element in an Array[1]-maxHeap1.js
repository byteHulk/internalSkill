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

// 大根堆就是一颗完全二叉树
class Heap {
  constructor(arr) {
    this.heap = arr
    this.heapify()
  }

  // 把数组进行堆化
  heapify() {
    const firstParentIndex = Math.floor((this.heap.length - 2) / 2)
    for (let i = firstParentIndex; i >= 0; i--) {
      this.siftDown(i)
    }
  }

  // 下沉操作，对每个结点及其子树进行交换
  siftDown(i) {
    let childIndex = this.getLastMaxIndex(i)

    while (
      childIndex < this.heap.length &&
      this.heap[childIndex] > this.heap[i]
    ) {
      this.swap(i, childIndex)
      this.siftDown(childIndex)
      i = childIndex
      childIndex = this.getLastMaxIndex(i)
    }
  }

  // 返回该节点子树里较大节点的索引
  getLastMaxIndex(i) {
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (this.heap[right] === undefined || this.heap[left] > this.heap[right]) {
      return left
    } else {
      return right
    }
  }

  // 弹出堆顶元素，并将后面的元素进行下沉
  remove() {
    this.swap(0, this.heap.length - 1)
    let top = this.heap.pop()
    this.siftDown(0)

    return top
  }

  // 交换两个节点
  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}
// @lc code=end
