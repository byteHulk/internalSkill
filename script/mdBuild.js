const path = require('path')
const fs = require('fs')

const src = path.join(__dirname,'../src/')
const leetcode = path.join(src,'leetcode/')
const _build = path.join(src,'_build/')

let data = fs.readdirSync(leetcode).filter(e => e !== '.DS_Store')

data.map(item => {
    let filePath = path.join(leetcode,item)
    let fileName = item.replace(/\[.*\]/,'').replace(/\s/ig,'-').toLowerCase()+'.md'
    let time = fs.readdirSync(filePath).filter(e => e !== '.DS_Store')?.[0]
    let mdPath = path.join(filePath,time,'index.md')
    let indexMd = fs.readFileSync(mdPath)
    let targetPath = path.join(_build,fileName)

    
    fs.writeFileSync(targetPath,indexMd)
    console.log(`write success [${fileName}]`)
})