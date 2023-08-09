// const math = require("./math2.js")
// console.log(`더하기 : 3 + 2 = ${math.add(2,3)}`)
// console.log(`빼기 : 3 - 2 = ${math.sub(3,2)}`)
// console.log(`곱하기 : 3 * 2 = ${math.mul(3,2)}`)
// console.log(`나누기 : 3 / 0 = ${math.div(3,0)}`)

// 객체 분해 구조(destructing)를 사용할 경우 이름이 동일해야 함.
const {add, sub, mul, div} = require("./math2.js")
console.log(`더하기 : 3 + 2 = ${add(2,3)}`)
console.log(`빼기 : 3 - 2 = ${sub(3,2)}`)
console.log(`곱하기 : 3 * 2 = ${mul(3,2)}`)
console.log(`나누기 : 3 / 0 = ${div(3,0)}`)

const cookie = {
  "chocolate" : "chocolate cookie",
  "vanilla" : "vanilla cookie"
}
// 위의 cookie를 객체 구조분해 해볼때
// 객체의 키값을 가져오면 그대로 사용가능하다.
const {chocolate, vanilla} = cookie
const {c, v} = cookie
console.log(chocolate, vanilla)
console.log(c, v) // undefined, undefined



