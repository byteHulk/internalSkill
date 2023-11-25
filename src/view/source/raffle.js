/*
  请实现抽奖函数rand，保证随机性
  输入为表示对象数组，对象有属性n表示人名，w表示权重
  随机返回一个中奖人名，中奖概率和w成正比
*/
let peoples = [
    { n: "p1", w: 100 },
    { n: "p2", w: 200 },
    { n: "p3", w: 1 },
  ];
  let rand = function (p) {
    const totalWeight = p.reduce((acc,cur) => acc + cur.w,0)

    let randomWeight = Math.floor(Math.random() * totalWeight)

    for(const {n,w} of peoples){
        if(randomWeight < w) return n
        randomWeight -= w
    }
  };