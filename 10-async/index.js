// function goMart() {
//   console.log("go to mart")
// }
// function pickDrink() {
//   setTimeout(() => {
//     console.log("pick zero coke")
//     price = 2000; 
//   }, 3000)
// }

// function pay(product, price) {
//   console.log(`product : ${product}, price : ${price}`)
// }

// let product;
// let price;
// goMart()
// pickDrink()
// pay(product, price) // undefined undefined

// pickDrink의 setTimeout을 가디리지 않고 바로 pay함수를 실행하기 때문에 문제가 발생한다.


// callback 함수를 통해 비동기 처리

function goMart() {
  console.log("go to mart")
}
function pickDrink(callback) {
  setTimeout(() => {
    console.log("pick zero coke")
    product = "coke zero"
    price = 2000;
    callback(product, price)
  }, 3000)
}
function pay(product, price) {
  console.log(`product : ${product}, price : ${price}`)
}
// pay함수를 pickDrink안에 파라미터로 넘겨주어 비동기 문제를 해결한다.
goMart()
pickDrink(pay)
// pay(...pickDrink())
// callback 