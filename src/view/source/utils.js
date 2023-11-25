function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
}

// mock fetch
const fetch = (url) => {
  const result = [url + ' is success', url + ' is error']
  const f = getRandomInt(0, 2)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      f ? reject(result[f]) : resolve(result[f])
    }, getRandomInt(1000, 5000))
  })

  // return {
  //   then: (fun) => {
  //     !f ? fun(result[f]) : null

  //     return {
  //       catch: (fun) => {
  //         f ? fun(result[f]) : null

  //         return {
  //           finally: (fun) => {
  //             fun()
  //           },
  //         }
  //       },
  //     }
  //   },
  // }
}
