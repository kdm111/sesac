// async await

// 
// async function f1() {
//   return 1;
// }

// async function f2() {
//   return Promise.resolve(1)
// }

// // console.log(f1(), f2()) // promise {1} Promise {<pending>}
// // f1함수는 async가 붙어 있으므로 promise 객체를 반환한다.
// // f2함수는 대기 상태를 의미하는 pending을 의미한다.

// f1().then((res) => {console.log(res)}) // res는 1을 반환한다.
// f2().then((res) => {console.log(res)}) // res는 1을 반환한다.
// 둘다 resolve함수의 인자를 반환한다.


// index.js에 있는 예제를 

// async 함수 앞에 붙이는 키워드
// 함수만 보고도 비동기 함수임을 유추할 수 있다. 프로미스를 반환한다.
// await : 기다리다
// 성공/실패 프로미스 객체의 실행이 완료되기를 기다림
// async를 사용한 함수에만 await를 사용할 수 있다.



// function fetchFruits() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const fruits = ['사과', '레몬', '수박'];
//       resolve(fruits);
//       // reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
//     }, 1000);
//   });
// }
// // async await를 사용하면 에러 캐치는 try catch를 사용하여 문제를 해결한다.
// const printItems = async () => {
//   try {
//     const fruits = await fetchFruits()
//     console.log(fruits)
//   } catch (error) {
//     console.error(error)
//   }
// }

// printItems()


function goMart() {
  console.log("go to mart")
}
function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("pick zero coke")
      product = "coke zero"
      price = 2000;
      // resolve() // resolve()가 내부에 존재하면 then 메소드에 있는 콜백 함수가 실행된다.
      price <= 2000 ? resolve() : reject()
        
    }, 1000);
  })
}
function pay() {
  console.log(`product : ${product}, price : ${price}`)
}
function noPay() {
  console.log("잔액 부족")
}

// 코드의 실행 순서가 더 명확하다.
async function exec() {
  goMart() // 1
  try {
    await pickDrink() // 2
    pay() // 3
  } catch (error) {
    noPay() // 3
  }
}
exec()




