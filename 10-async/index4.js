function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name)
      resolve(name)
    }, 1000)
  })
}
function back() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("back")
      resolve("back")
    }, 1000)
  })
}
function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("callback hell")
    },1000)
  }) 
}

// call("kim")
// .then((name) => {
//   console.log(`${name} 반가워`)
//   return back()
// })
// .then((txt) => {
//   console.log(`${txt}을 실행했구나`)
//   return hell()
// })
// .then((msg) => {
//   console.log(`여기는 ${msg}`)
// })

// .then((txt) => {
//   console.log(`${txt}을 실행했구나`)
//   return hell()
// })
// .then((message) => {
//   console.log(`여기는 ${message}`)
// })


async function exec() {
  const user = await call("kim")
  console.log(`${user} 반가워`)
  const txt = await back()
  console.log(`${txt}을 실행했구나`)
  const message = await hell()
  console.log(`여기는 ${message}`)
}
exec()

// const palette = ["red", "orange", "yellow", "green", "blue"]
// function bodyColorChange(i) {
//   if (i == 5){
//     return 
//   }
//   return new Promise((resolve, reject) => {
//     document.body.style.backgroundColor = palette[i]
//     setTimeout(() => {
//       return bodyColorChange(i+1)
//     }, 1000);
//   })
// }
// bodyColorChange(-1)