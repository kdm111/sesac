// 함수
// 입력 -> 함수 -> return -> 출력
// 동일한 작업을 여러번 수행할 수 있음
// 특정 작업을 수행하기 위해 독립적으로 설계된 코드의 집합

// 1. 내장 함수
// 이미 언어에서 자주 사용하는 기능을 만들어 놓은 함수
// 2. 사용자 정의 함수
// 개발자가 스스로 커스터마이징하여 만드는 함수
// 키워드 함수이름(매개변수(인자)) {블록, 스코프 함수 내부}
function hello() {}

// 용어 정의
// 함수를 정의(선언)한다. : 함수를 "생성"한다.
// 함수를 호출한다. : 함수를 "사용"한다.

// 1. 명시적 함수 선언
function helloWorld() {
  // return keyword 생략가능
  // 이 경우 반환값은 undefined
  console.log("Hello World!")
}
// helloWorld()
// console.log(helloWorld())
function helloWorld2() {
  return "Hello World!"
}
// console.log(helloWorld2())
// return 키워드는 반환값
// 함수 내부의 최종 결과값
// 최종 결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수실행 중단 return 다음에 코드 더 작성 X

// 함수 표현식 (function expression)
// 익명 함수를 선언하여 helloWorld3라는 변수에 저장
const helloWorld3 = function () {
  console.log("Hello World 3")
}
const helloWorld4 = function () {
  return "Hello World 4"
}

// 매개변수가 있는 함수
function hello(text) {
  return text
}
console.log(hello("안녕"))
const apple = "사과"
console.log(hello("안녕"), hello(apple))

function hello2(text, name) {
  return `${text} ${name}`
}
console.log(hello2("안녕", "john"))

function hello3 (text, name) {
  console.log(`${text} ${name}`)
}
hello3("안녕", "bixby")

// 3. 화살표 함수 (arrow function)
// 함수 선언을 더 간단하게 할 수 있음

// function myFunc1(x) {
//    return x;
// }
// 리턴 마저 생략이 가능하다.
// 단 중괄호 생략은 리턴문만 존재할 경우 가능
const myFunc1 = (x) => x
const mySum = (a,b) => a+b
const mySum2 = (a,b) =>{
  const result = a + b;
  return result;
}

// 호이스팅(hoisting)
// 끌어올리다라는 사전적 의미를 가지고 있다.
// 함수 선언에서는 함수 선언문이 호이스팅 대상이 된다.
// 에러가 발생하지 않고 실행된다. 결과값은 NaN
console.log(a + b)
var a = 1;
var b = 2;
// 함수 호출을 정의보다 먼저 일어나게 함.
// 코드가 실행되기 전에  모든 함수와 변수의 선언이 끌어올려짐. 단 let, const는 호이스팅이 되지 않음
// 
// myHello()
// function myHello() {
//   console.log("hello")
// }

// 함수 표현식은 호이스팅의 대상이 될 수 없다.
//  선언부보다 호출부가 먼저 올 수 없음. 
// myHello2()
// const myHello2 = function(){
//   console.log("my hello2")
// }

// const multiply = function (m, n) {
//   return m * n
// } 
// console.log(multiply(5,2))
// const square = (n) => {
//   return n ** 2
// }
// console.log(square(2))

