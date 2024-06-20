## 215 数组中的第K个最大元素

### 前言
本题主要考察数组的API及基础算法的理解和使用


### 解法一：快排变种
参考快排的底层(分治思想)，每次迭代都能确定一个元素的位置，可以通过这个来缩小排序的范围

```js
var findKthLargest = function (nums, k) {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
  }

  const quickSelect = (arr, k) => {
    const q = getRandomInt(0, arr.length - 1)
    let lesser = [],
      greater = [],
      mid = [],
      pivot = arr[q]

    for (let item of arr) {
      if (item < pivot) lesser.push(item)
      else if (item > pivot) greater.push(item)
      else if (item === pivot) mid.push(item)
    }
    
    if (greater.length >= k) pivot = quickSelect(greater, k)
    else if(greater.length + mid.length < k) pivot = quickSelect(lesser, k - greater.length - mid.length)

    return pivot
  }

  return quickSelect(nums, k)
}
```

#### 算法复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(logn) 递归使用栈空间的空间代价的期望为 O(logn) 
&nbsp;
### 解法二：堆排序
也是通过完全二叉树缩小比较的范围
将数组构建一个完全二叉树，然后执行 k - 1 次弹出栈顶元素，然后再弹出一次为目前元素

```js
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
```

#### 算法复杂度分析
- 时间复杂度：O(logn)
- 空间复杂度：O(logn) 递归使用栈空间的空间代价的期望为 O(logn) 
&nbsp;
    