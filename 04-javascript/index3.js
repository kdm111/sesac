console.log("connected")

// 변수 선언 == 변수 정의
// 변수 할당, 연산자를 이용해 값을 넣는다.
// 초기화 : 변수에 처음 할당되는 순간


// 변수 선언 키워드 1. var
var a
console.log(a) // undefined
a = 2
console.log(a) // 2

// var 변수의 이상한점
// 변수를 선언하기 전에 값을 할당할 수 있음;
// 장점같이 보일 수 있지만 유지보수가 힘듬.
aa = 2
console.log(aa)

// 선언과 할당을 동시에 할 수 있다.
var a2 = 2
console.log(a2)


// 변수 선언 키워드 2. let
let b // 변수 선언
console.log(b) // undefined
b = 7
console.log(b) // 7
//선언과 할당 동시에 가능
let b2 = 77
console.log(b2) // 77
// 재할당 가능
b2 = 11
console.log(b2) // 11

// 변수 선언 키워드 3. const
// 변수 선언과 할당이 동시에 이루어져야 한다.
// 변하지 않는 값을 변수에 저장할 때 사용

const c = 11
console.log(c) // 1
// const는 재할당 불가능
// c = 2; // 콘솔에서 에러 발생

// !undefined == true
// console.log(!undefined, undefined == null, !undefined == true)


// 변수 이름 규칙 (-> 식별자 규칙)
// 식별자 : 이름을 붙일 때 사용하는 단어(변수명, 함수명, 클래스명 ...)
/* 
  1. 키워드(예약어) 사용 불가, let, const같은 단어들
  2. 숫자로 시작할 수 없다.
  3. _, $같은 단어로만 변수 이름 가능
  4. 공백문자 사용 불가
*/
/* 
  (관례)식별자에 단어 두 개 이상 작성하고 싶은 경우 camelCase로 작성하는 것이 관례
*/

// 자료형(data type)
// 데이터(변수)의 종류가 무엇인가?

// 원시 타입(primitive type)
// string, number, undefined, null, boolean

// 1.string, 텍스트 정보이고 따옴표로 감싸야 한다. 
let text = "hi!"
let text2 = '안녕하세요!'
let gender = '남자'
console.log(text,text2) // 띄어쓰기가 들어감
console.log(text +   text2) // 띄어쓰기가 들어가지 않음
// template literal
// `(백틱)과 함께 문자 내에서 ${}의 조합으로 변수의 이름을 사용할 수 있다.
console.log(`${text} 나는 ~~~다.`)

// 2. 숫자형
// 정수, 실수 모두 표현 가능
// 연산 가능
let num1 = 100
let num2 = 1.2;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

// 3. 불리언
// 불리언 대수로 true, false
// has, is를 주로 앞에 붙여서 확인
let hasApple = true
let isFlag = false

// 4. null 빈값
// "값이 없음을 의도적으로 명시"
let temp = null
console.log(null, typeof(temp), typeof(null)) // null, object, object
// 재할당 가능
temp = "11"
console.log(temp)

// 5. undefined
// 값도 없고 타입도 지정되지 않은 상태
let x;
console.log(x)



let q1  = 2;
q1 - 1;
console.log(q1)





// 객체 타입(object type)
// the others...

