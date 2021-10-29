//先尝试合并两个有序链表 [[1,4,5,6],[1,2,3,4]]

var mergeKLists = function (l1, l2) {
  //指向两个链表待合并的位置
  let l1b = l1
  let l2b = l2

  //哨兵节点 用来方便输出
  let dummyNode = new ListNode(0)

  //指向合并链表的尾巴
  let tail = dummyNode

  //遍历 条件 当两个链表都没遍历完
  while (l1b || l2b) {
    //当有链表先被合并完时，直接把另一个链表的头部接到tail的next
    if (!l1b) {
      tail.next = l2b
      return dummyNode.next
    }

    if (!l2b) {
      tail.next = l1b
      return dummyNode.next
    }

    // //处理值相等的情况 
    // if (l1b?.val === l2b?.val) {
    //   tail.next = l1b
    //   tail = tail.next
    //   tail.next = l2b
    //   tail = tail.next
    //   l1b = l1b?.next
    //   l2b = l2b?.next
    // }

    //处理值不相等的情况
    if (l1b?.val > l2b?.val) {
      tail.next = l1b
      l1b = l1b?.next
      tail = tail.next
    }else{
      tail.next = l2b
      l2b = l2b?.next
      tail = tail.next
    }
  }
  return dummyNode?.next
}

let r1 = new ListNode(1)
let r2 = new ListNode(2)
let r3 = new ListNode(3)
let r4 = new ListNode(4)
r1.next = r2
r2.next = r3
r3.next = r4

let l1 = new ListNode(1)
let l2 = new ListNode(4)
let l3 = new ListNode(5)
let l4 = new ListNode(6)
l1.next = l2
l2.next = l3
l3.next = l4

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const res = mergeKLists(l1, r1)

// let resArr = []
// let head = res
// while(head){
//     resArr.push(head.val)
//     head = head?.next
// }
function list2array(head) {
    if(!head) {
        return []
    }

    var result = []
    var p = head

    while(p) {
        result.push(p.val)
        p = p.next
    }

    return result
}

console.log(list2array(res), "res")
