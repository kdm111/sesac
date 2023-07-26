// 반복문

// for문 
// for (let i = 0; i < 10; i++) {
//   console.log(`${i}번째 안녕`)
// }

// 1~5출력
// for (let i = 1; i <= 5; i++) {
//   console.log(i)
// }
// console.log("-------------")
// for (let i = 5; i >= 1; i--) {
//   console.log(i)
// }

// let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
// let sum = 0
// for (let i = 1; i <= n; i++) {
//   sum += i
// }
// console.log(sum)


// let fruits = ["apple", "pear", "grape", "mango"]
// 배열의 원소 개수 == 배열의 길이 == 배열의 크기 
// .length는 배열의 크기를 알려주는 프로퍼티
// console.log(fruits.length)
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

// 1~20까지의 짝수일 때 합 구하기
// let sum2 = 0
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0)
//     sum2 += i
// }
// console.log(sum2)


// while문
// 괄호 안이 참일 경우 반복을 계속한다.
// let idx = 0
// while (idx < 10) {
//   console.log(`${idx}번째 안녕`)
//   idx += 1
// }
// break 반복을 멈추고 빠져나감
// idx = 0;
// while (true) {
//   console.log(`${idx}번째 안녕`)
//   idx += 1
//   if (idx === 10) {
//     break
//   }
// }

// continue 이번 회차를 스킵하고 다음으로 넘어감
let sum3 = 0
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0)
    continue
  sum3 += i
}
console.log(sum3)

