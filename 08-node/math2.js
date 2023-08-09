

const add = (a,b) => {return a+b}
const sub = (a,b) => {return a-b}
const mul = (a,b) => {return a*b}
const div = (a,b) => {
  return b == 0 ? false : a/b
}

const PI = 3.141592
const E = 2.718

// js만 사용하기 위해서는 이 방법을 사용한다.
// module.exports = {
//   add, PI, E, sub, mul, div
// }

// 1 == 2
exports.add = add
exports.sub = sub
exports.mul = mul
exports.div = div



// export {add, PI, E} doesn't work