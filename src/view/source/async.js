import { fetch } from './utils'
// 在有并发数 max 限制的前提下, 最高效地发送完 urls 里的所有请求,
//  当所有请求返回后执行 callback, 发请求的函数用 fetch 即可

//  ----------------------------------  封装请求函数版, 一个结束加另一个 --------------------------------------------
function sendRequest(urls, max, callback) {
  // 1.先把并发池填满 2.用 race 监听一个请求完成，再往事件池里面加入一个请求
  // 注意: 异步的顺序问题

  //并发池
  let pool = []
  let curIndex = 0
  const resArr = new Array(urls?.length)
  let count = 0

  const request = (url, index) => {
    fetch(url)
      .then((res) => {
        resArr[index] = res
      })
      .catch((err) => {
        resArr[index] = err
      })
      .finally((_) => {
        count++

        // 1.一个请求完成，再往事件池里面加入一个请求
        if (curIndex < urls.length - 1) {
          request(urls[curIndex++], curIndex)
        }

        // 2.监听是否全部请求完成, callback
        else if (count === urls.length) {
          callback(resArr)
        }
      })
  }

  pool = urls.slice(0, max)
  curIndex = max - 1

  pool.map((url, index) => request(url, index))
}

// -------------------------------------------------- promise.race ---------------------------------------------------

class PromisePool {
  constructor(max, fn) {
    this.max = max // 最大并发数
    this.fn = fn // 自定义的请求函数
    this.pool = [] // 并发池
    this.urls = [] // 剩余的请求地址
  }

  start(urls) {
    this.urls = urls
    // 先循环把并发池塞满
    while (this.pool.length < this.max) {
      let url = this.urls.shift()
      this.setTask(url)
    }
    // 利用Promise.race 方法来获得并发池中某任务完成的信号
    let race = Promise.race(this.pool)
    return this.run(race)
  }

  run(race) {
    race.then((res) => {
      // 每当并发池跑完一个任务，就再塞入一个任务
      let url = this.urls.shift()
      this.setTask(url)
      return this.run(Promise.race(this.pool))
    })
  }
  setTask(url) {
    if (!url) return
    let task = this.fn(url)
    this.pool.push(task) // 将该任务推入pool并发池中
    console.log(`\x1B[43m ${url} 开始，当前并发数：${this.pool.length}`)
    task.then((res) => {
      // 请求结束后将该Promise任务从并发池中移除
      this.pool.splice(this.pool.indexOf(task), 1)
      console.log(`\x1B[43m ${url} 结束，当前并发数：${this.pool.length}`)
    })
  }
}

// test
const URLS = [
  'bytedance.com',
  'tencent.com',
  'alibaba.com',
  'microsoft.com',
  'apple.com',
  'hulu.com',
  'amazon.com',
]
// 自定义请求函数
var requestFn = (url) => {
  return new Promise((resolve) => {
    setTimeout((_) => {
      resolve(`任务 ${url} 完成`)
    }, 1000 * dur++)
  }).then((res) => {
    console.log('外部逻辑 ', res)
  })
}

const pool = new PromisePool(3, requestFn) // 并发数为3
pool.start(URLs)
// ---------------------------------------- test --------------------------------------------

sendRequest(
  new Array(2).fill(0).map((_) => 'https://www.baidu.com/'),
  3,
  (res) => console.log('res ===========> ', res)
)
