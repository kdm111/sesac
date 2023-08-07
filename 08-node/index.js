// console.log("node.js로 js 파일을 읽기") // node index.js

const rl = require('readline').createInterface({
  input : process.stdin,
  output : process.stdout
})
rl.question("hi\n", (ans) => {
  ans
})

// function timesTable(n) {
//   let i = 1
//   while (i < 10) {
//     console.log(`${n} * ${i} = ${n * i}`)
//     i += 1
//   }
//   console.log(`${n}단 끝!`)
// }

// timesTable(7)