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


// 6. array (배열)
// 배열의 이름은 fruits,배열의 원소(아이템)은 하낳나
// 배열의 위치, index = 0
// 배열의 길이(크기) : 원소의 개수와 동일
const fruits = ["orange", "pineapple", "grape", "apple"]
// const flowers = new Array() 이제는 더이상 사용하지 않음
console.log(`${fruits}`, fruits)
console.log(`${fruits[0]}`) // 배열의 위치가 0인 원소 출력

// js에서는 배열 원소의 자료형이 달라도 된다.
const data = [1, "name", false, null, undefined, Symbol("key")]

// array 안에 array를 넣는 중첩이 가능하다.
const korean = [
  ["seoul", "busan"], ["가", "나", "다"], ["사", "아", "자"]
]
// 서울을 출력하고 싶다면 인덱싱 접근을 두번하면 된다.
console.log(korean[0][0])
// 합성해서 사용하는 것도 가능하다.
console.log(korean[1][0] + korean[2][2])
// 3차원 배열 역시 쉽게 가능하다.
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];
console.log(nums[1][0][1])


// 7. object (key : value)
const cat = {
  name : "나비",
  age : 1,
  isCute : true,
  mew : function(){return "mew"}
}
console.log(cat)
// 고양이의 이름만을 출력하고 싶을 때는
// 점 표기법과 대괄호 표기법을 사용한다.
console.log(cat.name, cat["name"])
// 대괄호 표기법은 key가 변수에 저장되어 있을 때 주로 사용
const tempVal = "name"
console.log(cat[tempVal], cat.tempVal) // 나비 undefined

// 8.typeof
// 더 편한 방식을 사용할 수 있다.
// typeof(x) === typeof x
console.log("aaa's type is",typeof "aaa")
console.log("1's type is", typeof 1)
console.log("3.14's type is", typeof 3.14)
console.log("true's type is", typeof true)
console.log("false's type is", typeof false)
// null의 자료형이 object로 나온다.
// 언어 자체의 오류
console.log("null's type is", typeof null) 
console.log("undefined's type is", typeof undefined)
console.log("fruits's type is", typeof fruits)
console.log("cat's type is", typeof cat)
// 함수의 자료형은 함수
console.log("mew's type is", typeof cat.mew)


// 형 변환
// let mathScore = prompt("수학 점수 입력 : ")
// let engScore = prompt("영어 점수 입력 : ")
// let avg = (mathScore + engScore) / 2

// console.log(`평균 점수는 ${avg}입니다.`)
// 자동 형변환
// 점수가 마음대로 합쳐져서 바뀌면서 예기치 못한 에러를 발생시킬 수 있음

// 형변환 1. String()

let str1 = true;
let str2 = 123;
let str3 = null;
console.log(String(str1), typeof String(str1)) // 
console.log(String(str2), typeof String(str2)) // 
console.log(String(str3), typeof String(str3)) // 

// .toString()
console.log(str1.toString(), typeof str1.toString()) // 
console.log(str2.toString(), typeof str2.toString()) // 
// console.log(str3.toString(), typeof str3.toString()) // null은 메서드 사용이 불가능하다.


// 2. Number() 
let n1 = true;
let n2 = false;
let n3 = "123.9"

// 불리안의 경우 true = 1 false = 0으로 변경된다.
console.log(Number(n1), typeof Number(n1))
console.log(Number(n2), typeof Number(n2))
console.log(Number(n3), typeof Number(n3))
// 둘다 not a number 이지만 자료형은 
console.log(Number(undefined), typeof Number(undefined))
console.log(Number(null), typeof Number(null))

// parseInt
// parseInt의 경우 불리언을 숫자로 형변환하지는 못한다.(NaN)
// 또한 실수형은 정수형으로 치환된다.
console.log(parseInt(n1, 10), typeof parseInt(n1, 10))
console.log(parseInt(n2, 10), typeof parseInt(n2, 10))
console.log(parseInt(n3, 10), typeof parseInt(n3, 10))
// 실수형을 그대로 표현하고 싶다면 parseFloat를 사용한다.
console.log(parseFloat(n3, 10), typeof parseFloat(n3, 10))


let mathScore;
let engScore;
mathScore = "77";
engScore = "88";
const avgScore = (Number(mathScore) + Number(engScore)) / 2
console.log(`평균 점수 : ${avgScore}`)

let d