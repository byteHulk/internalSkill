node ./script/makeMd.js
node ./script/mdBuild.js
git add .
git commit -m "doc:complete leetcode $1"
git push