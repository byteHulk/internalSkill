const path = require("path")
const fs = require("fs")
const _ = require("underscore")
const { COMPONIES, TAGS } = require("./lib/_company&tags")

const src = path.join(__dirname, "../src/")
const leetcode = path.join(src, "leetcode/")
const sessionPath = path.join(
  process.env.HOME || process.env.USERPROFILE,
  ".lc/leetcode.cn"
)
const problems = JSON.parse(
  fs.readFileSync(sessionPath + "/cache/problems.json", "utf-8")
)
const levelMap = {
  Easy: "简单",
  Medium: "中等",
  Hard: "困难",
}
_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\$\{(.+?)\}/g,
}

let data = fs.readdirSync(leetcode).filter((e) => e !== ".DS_Store")
let quesForType = []
let map = {}

data.forEach((item) => {
  let id = item.match(/\[(.*)\]/)[1]

  let problem = problems.find((e) => e.id == id)
  if (!problem) {
    problem = problems.find((e) => e.fid == id)
  }
  if (!problem) {
    console.log("the problem this undefined",item)
    return
  }
  let tag = TAGS?.[id]?.[0]
    ? TAGS[id][0]?.slice(0, 1).toUpperCase() +
      TAGS[id][0].slice(1).toLowerCase()
    : "面试题"
  let times = fs
    .readdirSync(path.join(leetcode, item))
    .filter((e) => e !== ".DS_Store")
    ?.map((e) => true)

  if (tag in map) {
    let i = quesForType.findIndex((e) => e.type === tag)

    if (i !== -1) {
      quesForType[i].data.push({
        id,
        level: levelMap[problem?.level || "面试题"],
        trans: problem?.trans || problem?.slug,
        title: problem.slug,
        times,
      })
    }
  } else {
    map[tag] = 0
    quesForType.push({
      type: tag,
      data: [
        {
          id,
          level: levelMap[problem.level],
          trans: problem.trans,
          title: problem.slug,
          times,
        },
      ],
    })
  }
})

let filledData = _.template(
  fs.readFileSync(path.join(__dirname, "./lib/readme.tpl")).toString()
)({
  quesForType,
})

fs.writeFileSync("../src/_build/_data.json", JSON.stringify(quesForType))
fs.writeFileSync("../README.md", filledData)
console.log("make md is success")
