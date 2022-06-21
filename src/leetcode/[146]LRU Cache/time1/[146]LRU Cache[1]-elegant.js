/*
 * @Author: HuangBoWen
 * @Date: 2022-03-27 19:29:43
 * @LastEditors: HuangBoWen
 * @LastEditTime: 2022-03-27 20:08:46
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start

class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(key, val) {
    const newNode = new Node(key, val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return newNode
  }

  remove(node) {
    if (!node.next && !node.prev) {
      this.head = null
      this.tail = null
    } else if (!node.next) {
      this.tail = node.prev
      this.tail.next = null
    } else if (!node.prev) {
      this.head = node.next
      this.head.prev = null
    } else {
      const prev = node.prev
      const next = node.next
      prev.next = next
      next.prev = prev
    }
    this.length--
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.DLL = new DoublyLinkedList()
  this.map = {}
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map[key]) return -1
  const value = this.map[key].val
  this.DLL.remove(this.map[key])
  this.map[key] = this.DLL.push(key, value)
  return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) this.DLL.remove(this.map[key])
  this.map[key] = this.DLL.push(key, value)
  if (this.DLL.length > this.capacity) {
    const currKey = this.DLL.head.key
    delete this.map[currKey]
    this.DLL.remove(this.DLL.head)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
