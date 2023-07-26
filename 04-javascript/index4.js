// 연산자

// 대입 연산자 (=)
// 변수에 값을 할당할 때 사용한다.

// 산술 연산자
// +, -, *, /, %, **
let a = 5;
let b = 2;
console.log(a+b) // 7
console.log(a-b) // 3 
console.log(a*b) // 10
console.log(a/b) // 2.5
console.log(a%b) // 1
console.log(a**b) // 25

// 비교 연산자
// 동등 == ===
// == 단순값 만 비교, === 값과 자료형을 모두 비교
// != 단순값이 다른지 비교 !== 값과 자료형을 모두 비교하여 다른지 확인(권장)
// string과 number의 비교시 값을 스스로 변환하여 체크
let a1 = '8'
let a2 = 9
console.log(a1 == a2)
console.log(a1 > a2)
console.log(a1 < a2)

// 크기 비교
// >. <. <=. >=
console.log("1 > 2", 1 > 2)
console.log("1 < 2", 1 < 2)

// 동등연산자
// 다음과 같은 식들이 true로 계산이 되면서 예상치 못한 오류가 발생할 수 있다.
console.log(1 == '1')
console.log('0' == false)
console.log("" == false)
console.log("" == 0)
console.log(undefined == null)
// 논리 연산자.
console.log(""); 
console.log("논리 연산자 ")
// ! : not (참 -> 거짓, 거짓 -> 참)
// && : and (여러 값중 하나라도 거짓이면 거짓)
// || : or (여러 값중 하나라도 참이면 참)
console.log(true)
console.log(!true)
console.log(!!true)

console.log("true && true", true && true)
console.log("!true && true", !true && true)
console.log("true && !true", true && !true)
console.log("!true && !true", !true && !true)

// 증감 연산자
// ++ 1증가 시킴, -- 1감소 시킴
let result1, result2;
let num1 = 10; num2 = 10;

// 후위 연산자는 행이 종료된 후에 실행된다.
result1 = num1++
// 전위 연산자는 행에서 가장 먼저 실행되는 연산자이다.
result2 = ++num2
console.log(result1, result2)
console.log(num1, num2)
// += -=를 더 자주 씀
console.log(num1 += 1, num2 -= 1)