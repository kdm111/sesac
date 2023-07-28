// pass by value
// 1.원시 타입은 값(value)이 복사되어 전달된다.
let num = 1;
let num2 = num;
console.log(num === num2) // true 값이 복사되었다는 뜻
num2 += 1
console.log(num2, num) // 2 1
console.log(num === num2) // false 값이 달라짐

// pass by reference
const obj = {one : 1, two : 2}
const obj2 = obj;
console.log(obj === obj2)

obj.five = 5
console.log(obj, obj2) // obj에 프로퍼티를 추가해도 obj2에 추가된다.
console.log(obj === obj2) // true obj에 값을 추가하여도 둘을 같은 객체로 인식된다.
// obj는 현재 같은 데이터를 갖고 같은 참조값을 갖는다.

const obj3 = {one : 1, two : 2}
const obj4 = {one : 1, two : 2}
obj3.five = 5
console.log(obj3, obj4)
console.log(obj3 === obj4) // false 
// obj3와 obj4는 각각 같은 데이터를 같지만 서로 다른 별도의 객체 
// 즉 참조값(reference value)가 다르다!!!

// obj4 = {three : 3, four : 4} //const의 주소값은 변경될 수 없다.
// const는 재할당될 수 없다. 할당은 변수에 값을 할당하는 것으로 
// console.log(obj4)

// 원시 타입은 변수에 직접 값(value)이 저장되어 있다.
// 객체 타입은 변수에 객체의 주소(reference)가 담겨 있고 객체의 주소를 따라 가면 객체의 정보가 저장되어 있다.


// 배열도 일종의 객체이다.
// arr, arr2는 같은 참조값을 갖는다.
const arr = [1,2]
const arr2 = arr;
arr.push(5)
console.log(arr, arr2)
console.log(arr === arr2) // true

const arr3 = [1,2]
const arr4 = [1,2]
arr3.push(5)
console.log(arr3, arr4) // 둘은 다른 객체이다.
console.log(arr3 === arr4) // 다른 객체이므로 false
// const로 선언하였기 때문에 변수에 재할당이 불가능하다.

/*
  객체 리터럴(object literal)
  js에서 객체는 여러 의미를 같는다. 
  중괄호로 만드는 object와 primitive를 구분하는 타입도 존재한다.
  typeof [] -> object typeof {} -> object
  이 때의 객체는 광범위한 의미의 객체이다.

  리터럴은 키와 값의 쌍으로 이루어진 데이터 구조이다.
*/

console.clear() // 콘솔 클리어
// 표준 객체
// js 역시 표준 객체가 존재한다.

// 데이트객체
// 현재 날짜를 얻기 위한 객체
let now = new Date() // 현재 시간을 가져옴

// 타임 스탬프(timestamp)
// 1970년 1월 1일 09시를 기준으로 흘러간 ms를 나타내는 정수를 타임 스탬프라고 부른다.
let jan_01_1970 = new Date(0);
console.log(jan_01_1970) // 1970년 1월 1일 
let jan_02_1970 = new Date(24 * 3600 * 1000)
console.log(jan_02_1970) // 1970년 1월 2일

// 문자열을 넣어서 원하는 시간을 만들 수 있다.
// Y-M-D
// Y, M, D, H, m, s, ms
let date1 = new Date("2023-07-28")
let date2 = new Date('2023', '07', '28') // 0~11까지 숫자를 계산한다.
console.log(date1) // 7월 28일
console.log(date2) // 8월 28일
console.clear()
// 관련 메서드
console.log(now.getFullYear()) // 년도
console.log(now.getMonth()) // 월
console.log(now.getDay()) // 일
console.log(now.getHours()) // 시간(0 ~23)
console.log(now.getMinutes()) // 분
console.log(now.getSeconds()) // 초
console.log(now.getMilliseconds()) // 밀리초
console.log(now.getDay()) // 요일 (0~6) 

let day = new Date().getDay()
console.log(day == 0 || day == 6 ? "오늘은 주말입니다." : "오늘은 평일입니다.")
switch(day) {
  case 0:
  case 6:
    console.log("오늘은 주말입니다."); break ;
  default:
    console.log("오늘은 평일입니다.")
}

console.clear()

// math 객체
// 수학적인 상수와 함수가 정의되어 있음
// 속성
console.log(Math.E) // 자연로그
console.log(Math.PI) // 파이
console.log(Math.SQRT2, 2**0.5) // 2 ** 0.5

// 메소드
console.log(Math.min(100, -2, 0)) // 최소값을 뽑아준다.
console.log(Math.max(100, -2, 0)) // 최대값을 뽑아준다.
console.log(Math.round(1.5), Math.round(4.2), Math.ceil(1.1), Math.floor(1.9)) // 반올림, 올림, 내림
console.log(Math.random()) // 0~1미만의 난수 출력 [0, 1)

// random은 조금 응용해서 사용한다.
console.log(Math.floor(Math.random() * 10)) // 0~9사이 랜덤 추출
console.log(Math.floor(Math.random() * 11)) // 0~10사이 랜덤 추출

// 1~100까지 랜덤
console.log(Math.floor(Math.random() * 100) + 1) // [1, 101)
// 20~22 랜덤
console.log(Math.floor(Math.random() * 3) + 20) // [20, 23)


