// $() : HTML 요소를 선택하는 함수
// 동작함수로 요소에 대해 원하는 동작 수행

function submitJS () {
  const div1 = document.querySelector("#div1")
  div1.innerText = "응답 JS"
  div1.setAttribute("style", "border: 1px solid red")
}
function submitJQuery() {
  const div1 = $("#div1")
  div1.text("응답 jQuery")
  // div1.attr("style", "border: 1px solid blue")
  div1.css("border", "1px dotted blue")
}

const colorsJS = document.querySelectorAll(".color")
const colorsJQuery = $(".color")
// console.log(colorsJS) // nodeList
// console.log(colorsJQuery) // jQuery 객체

// JS li 선택시 글씨 색상을 빨간색으로 변경

// 1. for ... of ...
// for (let color of colorsJS) {
//   color.addEventListener("click", (e) =>{
//     e.target.classList.toggle("red")
//   })
// }

// 2. forEach
colorsJS.forEach((el) => {
  // el.addEventListener("click", () => {
  //   e.target.classList.toggle("red")
  //   // console.log(this)
  // })

  // 화살표 함수 this와 function this는 무엇이 다를까?
  el.addEventListener("click", function() {
    // console.log(this)
    this.classList.toggle("red")
  })
} )

// jQuery 클릭시 배경색상을 하늘색으로 변경

colorsJQuery.on("click", function() {
  console.log(this) // 선택되는 요소가 출력
  // this.classList.toggle("sky")
})