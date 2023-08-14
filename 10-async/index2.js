// Promise 객체
// 비동기 함수를 동기처리하기 위해 만든 객체

// 미래에 실패/성공에 따른 결과 값을 약속한다.
// 성공 실패를 분리해서 반환
// 성공에 대한 결과는 then, 실패에 대한 결과는 catch 메서드로 이어 받아 처리 가능
// resolve : success, reject = fail
// 

// 1. promise 생성코드

// Promise (프로미스)
// - 비동기 함수를 동기처리하기 위해 만든 객체
// - 미래에 실패/성공에 대한 결과 값을 "약속" 한다는 의미
// - 성공, 실패 분리해서 반환
//      - 성공, 실패에 대핸 결과는 then, catch 메서드로 이어 받아서 처리 가능
// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// 1. promise를 생성하는 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        // 괄호 사이에 있는 값이 .then 메서드의 콜백함수의 인자로 전달된다.
        `현재 프로미스의 상태는 fulfilled(이행)! then 메서드로 연결~ 이 때 flag 값은 ${flag}!`
      );
    } else {
      reject(
        // 괄호 사이에 있는 값이 .catch 메서드의 콜백함수의 인자로 전달된다.
        `현재 프로미스의 상태는 rejected(거절)! catch 메서드로 연결~ 이 때 flag 값은 ${flag}!`
      );
    }
  });
}

// 2. promise 사용하는 코드

// promise1(false)
// .then(function (result) {
//   console.log(result)
// })
// .catch(function (error) {
//   console.log(error)
// })

// promise1(false)
// .then((result) => {
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)
// })


// 콜백 함수를 이용해 동기처리한 것을 promise를 이용해 동기처리하기
// function goMart() {
//   console.log("go to mart")
// }
// function pickDrink() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("pick zero coke")
//       product = "coke zero"
//       price = 2300;
//       // resolve() // resolve()가 내부에 존재하면 then 메소드에 있는 콜백 함수가 실행된다.
//       price <= 2000 ? resolve() : reject()
        
//     }, 1000);
//   })
// }
// function pay() {
//   console.log(`product : ${product}, price : ${price}`)
// }
// function noPay() {
//   console.log("잔액 부족")
// }

// let product;
// let price;
// goMart()
// pickDrink()
// .then(pay)
// .catch(noPay)


// promise chaining

// (4 + 3) * 2 - 1 = 13을 연산해보자.
// sub(mul(add(4,3), 2), 1)

// function add(num1, num2, callback) {
//   setTimeout(() => {
//     let result = num1 + num2
//     callback(result)
//   }, 300)
// }

// function mul(res, callback) {
//   setTimeout(() => {
//     let result = res * 2
//     callback(result)
//   }, 300)
// }
// function sub(res, callback) {
//   setTimeout(() => {
//     let result = res -1
//     callback(result)
//   }, 300)
// }

// add(4,3,(x) => {
//   console.log(`더한 값은 ${x}`)
//   mul(x, (y) => {
//   console.log(`곱한 값은 ${y}`)
//     sub(y, (z) => {
//       console.log(`최종 값은 : ${z}`)
//     })
//   })
// })



function add (m, n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`더한 값은 ${m + n}`)

      resolve(m + n)
    }, 500)
  })
}
function mul(y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("의도적으로 발생하는 에러")
      console.log(`곱한 값은 ${2 * y}`) 
      // 이 경우 곱한값이 먼저 출력되고 reject함수가 호출된다.
      // 호출 된 블록은 마저 실행 시킨뒤 reject 함수를 호출하는 것으로 추측된다.
      // resolve(2 * y)
      
    }, 500)
  })
}

function sub(z) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`최종 값은 ${z - 1}`)
      resolve(z)
    }, 500)
  })
}

add(4,3)
.then((y) => {return mul(y)}) // 리턴을 해줘야 다음 then으로 이동한다.
.then((z) => {return sub(z)})
.catch((error) => {console.log(error)})



