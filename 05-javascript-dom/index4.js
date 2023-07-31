// JS 이벤트 
// 어떤 사건을 의미한다. 
// 버튼 클릭, 웹페이지 로드, 키가 눌렸을 때

// 이벤트에 함수를 등록하는 방법
// HTML 상에서 onXXX 속성으로 등록
function click1() {
  alert("클릭1")
}
// js 상에서 listener를 사용해 등록
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.querySelector("#container")
//
// addEventListener(이벤트 종류, 이벤트 발생시 일어날 함수 등록)
btn1.addEventListener('click', function() {
  alert("버튼 1을 클릭하셨네요!!")
})

btn1.addEventListener('mouseover', function() {
  btn1.style.backgroundColor = "violet";
})
btn1.addEventListener('mouseout', () => {
  btn1.style.backgroundColor = "rgb(44, 44, 44)";
})

btn2.addEventListener('click', (e) => {
  const div = document.createElement("div")
  div.style.backgroundColor = "pink"
  div.innerHTML = "!!!!"
  container.append(div)
  console.log(e)
})

btn3.addEventListener('click', changeColor)
function changeColor() {
  const divs = document.querySelectorAll("#container > div")
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
}
btn4.addEventListener('click', changeColor)

function func () {
  console.log(this) // 이 때의 함수는 클릭 이벤트의 모델을 의미한다.
  console.log(this.parentNode) // 이렇게 부모요소에 접근하는 것이 가능하다.
  this.style.backgroundColor = "darkred";
}
btn4.removeEventListener("click", this)

const btn = document.querySelector('button');
const input = document.querySelector('input');
/*'
  이벤트 객체
  이벤트 발생 -> 브라우저는 발생한 이벤트에 대한 정보를 담은 이벤트 객체(event object)를 리턴
  mousedown -> 마우스 이동
  keydown -> 키값을 불러올 수 있다.

*/
btn.addEventListener('click', function(event) {
  // 이벤트 객체를 불러온다.
  // 이벤트 객체에는 많은 속성이 속해 있다.
  // 이벤트.타겟 어떤 요모델에서 일어나는지
  // 이벤트.스타일
  // 이벤트.태그이름
  // 이벤트.콘텐트
  
})
input.addEventListener("keydown", (e) => {
  // e.key = 이벤트 발생시 입력되는 값
  // e.code = 이벤트 발생시 입력되는 키보드
  // console.log(e.key, e.code)

  if (e.code === "ArrowUp") {
    console.log("😀")
  } else if (e.code === "ArrowDown"){
    console.log("😀")
  } else {
    console.log("🥰")
  }
})

// form 태그의 경우 버튼은 서브밋의 속성이 든다. 백엔드로 정보가 넘어가면서
// 깜빡 거린다.
const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');
todoForm.addEventListener("submit", (e) => {
  e.preventDefault() // form 이벤트가 새로 고침 되는 것을 막음
  // 서브밋 이벤트 발생시 일어나는 새로고침을 막는 것

  const todoInput = document.querySelector('input[name="todo"]')
  const newTodo = todoInput.value.trim()
  if (newTodo != "") {
    const newTodoLi = document.createElement("li")
    newTodoLi.append(newTodo) //<li>입력값</li>
    todos.append(newTodoLi)
  }
  // input창 초기화
  todoInput.value = ""
})


// change input 요소에 변경이 일어나고 
// input이 포커스 아웃 되었을 때 일어나는 이벤트
const chgInput = document.querySelector("#change-input")

chgInput.addEventListener('change', (e) => {
  console.log("changed", e.target.value)
})

chgInput.addEventListener('input', (e) => {
  console.log("input", e.target.value)
  const div = document.querySelector(".intro")
  div.textContent = e.target.value
})