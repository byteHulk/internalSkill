// 版本号排序
// versions 是一个项目的版本号列表,因多人维护,不规则
// var versions = ['1.45.0','1.5','6','3.3.3.3.3.3.3.3']
// var sorted = ['1.5','1.45.0','3.3.3.3.3.3.3.3','6']

const sortVersions = (version) =>
  version.sort((a, b) => {
    const versionA = a.split(".")
    const versionB = b.split(".")

    let index = 0

    while (index < Math.max(versionA.length, versionB.length)) {
      const curVersionA = parseInt(versionA?.[index] || "0")
      const curVersionB = parseInt(versionB?.[index] || "0")
      //  1. 两个都不为空
      //  2. 一个为空
      // 3.两个都为空

      if (curVersionA > curVersionB) return 1
      if (curVersionA < curVersionB) return -1

      index++
    }

    return 0
  })

console.log(
  sortVersions(["1.45.1", "1.45.0", "1.5", "6", "3.3.3.3.3.3.3.3", "1.5"]),
  "sortVersions"
)
