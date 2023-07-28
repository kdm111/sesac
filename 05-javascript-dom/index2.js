// DOM (document object model)
// 문서 객체 모델
// xml이나 html 문서에 접근하기 위한 인터페이스로 문서 내의 모든 요소를 정의하고 
// html -> dom tree html 계층 관계를 정의해서 돔트리로 생성
// document가 최상 
// dom 새로운 요소, 속성 추가제거, 
// document html 객체에 접근하여 사용할 때 사용하는 객체


console.log(document) // 최상위 dom 객체
console.log(document.head) // html 
console.log(document.body) // html body
console.log(document.title) // 문서의 제목
console.log(document.URL) // 현재 html 페이지의 주소
console.log(document.domain) // mdn 사용 금지 권장

console.clear()
// document 객체를 이용해 HTML 요소 선택
// 1. getElementById id를 통해 선택
console.log(document.getElementById("red"))
console.log(document.getElementById("green"))


// 2. getElementsByClassName : 클래스를 통해 선택
console.log(document.getElementsByClassName("pink")) // 유사배열 형태로 나오기 때문에 인덱싱으로 접근 가능
console.log(document.getElementsByClassName("others")[1]) // 유사배열 형태로 나오기 때문에 인덱싱으로 접근 가능

Array(document.getElementsByClassName("pink")).forEach(item => {
  console.log(item)
});

console.clear()

// 3. getElementsByTagName 태그 이름으로 불러올 수 있음
console.log(document.getElementsByTagName("div"))

// 4. getElementsByName name속성의 값을 통해 가져올 수 있음
console.log(document.getElementsByName("id"))

// 5. querySelector css 셀렉터를 통해 가져올 수 있음, 단 처음에 보이는 하나의 값만 가져옴
console.log(document.querySelector(".pink")) // class pink
console.log(document.querySelector("#green")) // id green
console.log(document.querySelector("div")) // tag div
console.log(document.querySelector("[name=id]")) // 속성 name

//  6. querySelectorAll css 셀렉터를 가지고 있는 모든 모델을 가져옴.
console.log(document.querySelectorAll(".pink"))
console.log(document.querySelectorAll("#green"))
console.log(document.querySelectorAll("div"))
console.log(document.querySelectorAll("[name=id]"))



console.log(document.querySelectorAll(".pink")[1].innerHTML)




// 유사 배열은 HTMLcollection, Nodelist를 의미
// 배열은 아니다. index와 length는 가정
// 배열과 달리 사용가능한 메서드가 제한

// Nodelist -> foreach가 가능
// HTMLcollection은 foreach가 불가
document.querySelectorAll(".pink").forEach((item) => {
  console.log(item)
})
// error!
// document.getElementsByClassName(".pink").forEach((item) => {
//   console.log(item)
// })
// 반복을 해야 한다면 array from 사용
Array.from(document.getElementsByClassName("pink")).forEach(item => {
  console.log(item)
});
// for of 문 사용 가능
const pinks = document.getElementsByClassName("pink")
for (let pink of pinks) {
  console.log(pink)
}
