// 조건문
// if문
// if (5 > 3) {
//   console.log("참")
// }
// let number = Number(prompt("숫자를 입력해주세요"))
// if (number > 10) {
//   console.log("입력하신 숫자는 10보다 큽니다!")
// } else {
//   console.log("입력하신 숫자는 10보다 작습니다!")
// }
// if (number > 10) {
//   console.log("입력하신 숫자는 10보다 큽니다!")
// } else if (number == 10) {
//   console.log("입력하신 숫자는 10과 같습니다!")
// } else {
//   console.log("입력하신 숫자는 10보다 작습니다!")
// }

// if (number > 100 || number < 0) {
//   console.log("입력값이 잘못 되었습니다. 숫자의 범위는 0~100까지입니다.")
// } else if (number >= 90) {
//   console.log("A")
// } else if (number >= 80) {
//   console.log("B")
// } else if (number >= 70) {
//   console.log("C")
// } else if (number >= 60) {
//   console.log("D")
// } else {
//   console.log("F")
// }

// let age = Number(prompt("나이를 입력해주세요")) 
// if (age >= 20) {
//   console.log("성인")
// } else if (age >= 17) {
//   console.log("고등학생")
// } else if (age >= 14) {
//   console.log("중학생")
// } else if (age >= 8) {
//   console.log("초등학생")
// } else if (age >= 0) {
//   console.log("유아")
// } else {
//   console.log("숫자를 잘못 입력하셨습니다.")
// }

let userId = "user01"
let userPw = "1234"

// id와 pw를 검사하는 함수
function loginUser() {
  let inputId = prompt("아이디를 입력해주세요")
  let inputPw = prompt("비밀번호를 입력해주세요")

  // userId inputId가 같다면 
  // userPw inputPw를 비교
 
  if (userId === inputId) {
    if (userPw === inputPw) {
      return "login successful"
    } else {
      return "login failed"
    }
  } else if (inputId === '') {
    return "incorrect id, please check your id"
  } else {
    return "pw error login failed"
  }
}
// const result = loginUser()
// console.log(result)

// switch
// 소괄호 안에는 t/f가 아닌 변수 사용
// default는 모든 케이스가 만족하지 않았을 때 사용
// break : 조건을 빠져나갈 때 사용하는 키워드
// 
// let a = 2;

// switch (a) {
//   // case를 통해 여러 개의 case문을 묶을 수도 있다.
//   case 1:
//   case 2:
//   case 3:
//     console.log("a는 1~3입니다."); break ;
//   case 4:
//     console.log("a는 4입니다."); break ;
//   case 5:
//     console.log("a는 5입니다."); break ;
//   default:
//     console.log("a는 무슨 값인지 모르겠습니다!"); break ;
// }




// let score = parseInt(parseInt(prompt("점수를 입력해주세요"), 10) / 10)

// switch (score) {
//   case 10:
//   case 9:
//     console.log("A학점입니다.")
//   case 8:
//     console.log("B학점입니다.")
//   case 7:
//     console.log("C학점입니다.")
//   case 6:
//     console.log("D학점입니다.")
//   default:
//     console.log("F학점입니다.");
// }

// 삼항 연산자
// let num =  Number(prompt("숫자 입력"));
// if (num % 2 === 1) {
//   console.log("odd")
// } else {
//   console.log("even")
// }
// num % 2  === 1 ? console.log("odd") : console.log("even")

let now = new Date().getHours()
console.log(now >= 12 ? "오후" : "오전")


