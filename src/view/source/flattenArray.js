/*
 * 拍平数组
 */

function flattenArray(arr) {
    // 在这里实现函数 flatMap
    return arr.flatMap((item) => Array.isArray(item) ? flattenArray(item) : item)
  }
  
  console.log(flattenArray([1, [2, 3], [4, [5, 6]]]))
  console.log(flattenArray([1,[2,[3,[4,5]]]]))
  console.log(flattenArray([[1],[2],[3]]))
  console.log(flattenArray([1,[],[2,[3,[]],4],5]))
  