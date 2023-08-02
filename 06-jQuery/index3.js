// document // js
const doc = $("document")

// 1. load event
// js
// document.addEventListener("DOMContentLoaded", () => {
//   // 문서의 dom 트리가 완성되면 실행되는 이벤트
//   console.log("문서의 dom 트리가 완성되면 실행되는 이벤트-js")

// })

// jQuery
// $(document).ready(function() {
//   console.log("문서의 dom 트리가 완성되면 실행되는 이벤트-jquery")
// })

// jQuery
// $(function() {
//   console.log("동일한 함수")
// })

// Mouse Event

// click
$(".p-msg").click(function() {
  $(".p-msg").css("color", "red")
})

// $(".num").click(function() {
//   $(this).css("color", "blue") // 자기 자신을 의미하고 이벤트가 적용된 요소
// })

// $(".num").on("click", function() {
//   $(this).css("color", "blue")
// })
// in js
// const nums = document.querySelectorAll(".num")
// for (let num of nums) {
//   num.addEventListener("click", (e) => {
//     e.target.style.color = "blue"
//   })
// }


// mouse over
// $(".numbers").on("mouseover", function() {
//   $(this).css("background-color", "cyan")
//   $(this).append("<div>handler for .on() called</div>")
// })

// hover == mouse over + mouse out
// 마우스 올리고 뗏을 때
// $(".div-hover").hover(
//   // 마우스 올렸을 때 함수
//   function() {
//     $(this).addClass("hover")
//   },
//   // 마우스르 뗏을 때 함수
//   function() {
//     $(this).removeClass("hover")
//   }
// )
// $(".div-hover").hover(
//   // 마우스 on일 때 실행되어
//   function() {
//     $(this).toggleClass("hover")
//   }
// )

// scroll
// jQuery
// $(window).scroll(function(){
//   console.log(window.scroll)
// })

// JS
// window.addEventListener("scroll", (e) => {
//   console.log(e)
// })

// $(window).on("scroll", function() {
//   console.log("scrolling")
// })


// Key Event
// $(".input-key").on("keydown", function(e) {
//   // e 이벤트 객체 : 웹 브라우저의 속성값이 들어온다.
//   console.log(e.code) // 눌려진 고유 코드
//   console.log(e.key) // input에 입력된 값
  
//   if (e.key === "ArrowUp") {
//     console.log("!")
//   }
// })


// Form Event
$("#todo-form").on("submit", function(e) {
  e.preventDefault() 
  // 이벤트의 기본 동작을 막는 메서드
  // 새로고침을 막는 것이 아님
  // 지금 발생한 이벤트가 submit이기 대문에 submit 이벤트의 기본 동작인 새로고침을 막는 것이다.

  // console.log(e)

  // 퀴즈
  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장
  const todo = $("[name=todo]")
  // 2. todos 클래스를 갖는 요소를 선택
  $(".todos").append(`<li>${todo.val()}</li>`)
  //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가
  // 3. name 속성값이 todo인 요소의 value 초기화
  todo.val('')
})

// e.preventDefault() 또 다른 예제
$("#inactive").on("click", function(e) {
  e.preventDefault() // 이벤트의 기본 동작을 막음
  // a태그의 기본 동작은 링크로에 이동인데 막아짐.
  $("#text").append("이 링크는 동작하지 않음")
})

// this
// 함수가 속해 있던 객체를 참조한다.
// 콜백함수에서 this는 함수가 불려지는 객체를 의미한다.

// js
const btns = document.querySelectorAll(".btn")
const spans = document.querySelectorAll(".span")

function setBgColor() {
  this.style.backgroundColor = "skyblue"
}

function setBgColor2(el, color) {
  el.style.backgroundColor = color
}

for (let btn of btns) {
  // 파라미터를 사용해야 할 경우 해야 한다.
  btn.addEventListener("click", function() {
    setBgColor2(this, "violet")
  })
}
for (let span of spans) {
  span.addEventListener("click", setBgColor)
}

