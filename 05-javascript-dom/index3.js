const div1 = document.getElementById("div1")

// innerHTML 태그 사용가능, innerText, textContent 텍스트 불가
// innerHTML 텍스트에서 html 태그를 자동으로 인식하여 설정한다.
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다!"
// innerText 텍스트가 오직 텍스트로만 인식된다.
div1.innerText = "여기는 <b>첫번째</b> 태그입니다!"
// textContent 텍스트가 오직 텍스트로만 인식된다. 
div1.textContent = "여기는 <b>첫번째</b> 태그입니다!"

// 속성(attribute) 변경
const naver = document.getElementById("naver")
naver.setAttribute("href", "https://www.google.co.kr/")

const image = document.getElementById("pooh")
image.setAttribute("src", "./img/temp.png")

// 속성 얻기, 가져오기
// getAttribute("속성명") dot 연산자로 접근가능
// 속성값을 가져와 확인한다.
console.log(document.getElementById("pooh").getAttribute("src"))
console.log(pooh.id)
pooh.id = "winnie" // id 역시 변경 가능

// CSS 지정
const h1 = document.querySelector("h1")
const list = document.querySelectorAll("ul > li")

// JS로 CSS를 변경하기 위해서는 카멜케이스로 작성해야 한다.
list[0].style.backgroundColor = "purple"
list[0].style.color ="yellow"

for (let item of list) {
  item.style.backgroundColor = "purple"
  item.style.color ="yellow"
  item.style.fontSize = "24px"
  item.style.listStyle="none"
}

// 2. classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains
// xxx.classList.toggle 
// 
list[1].classList.add("add-h1")
list[1].classList.remove("add-h1")
console.log(list[1].classList.contains("add-h1"))

if (list[1].classList.contains("add-h1")) {

  list[1].innerHTML += " add-h1이 있습니다"
} else {
  list[1].innerHTML += " add-h1이 없습니다"
}

list[1].classList.toggle("add-h1") // 존재하면 제거하고 없다면 추가한다.


// 요소 찾기
// 계층 구조에 대한 요소를 잘 파악해야 한다.

let friends = document.querySelector("#friends")
let tigger = document.querySelector("#tigger")


// 1. 자식 요소
console.log(friends.children)
console.log(friends.children[1])

// 2. 부모 요소
console.log(tigger.parentNode)
console.log(tigger.parentElement)

// 3. 형제 요소
console.log(tigger.previousElementSibling)
console.log(tigger.nextElementSibling)
console.log(tigger.nextElementSibling.nextElementSibling)

// 요소 생성 , 추가, 삭제
const container = document.querySelector(".container")

// 요소 생성
const p = document.createElement("p") // 요소 생성
p.innerHTML = "새로 추가된 p요소"
p.style.fontWeight = 700;
p.style.backgroundColor = "red";

// 요소 추가
// x.append(y) x요소의 맨 마지막 자식으로 y를 추가, 여러 개를 추가할 수 있다.
// x.appendChild() 하나만 추가할 수 있다.
container.append(p)
div1.appendChild(p)
const p2 = document.createElement("p")
const p3 = document.createElement("p")
p2.innerHTML = "p2"
p3.innerHTML = "p3"
p2.classList.add("p-2")
p3.classList.add("p-3")
container.append(p2, p3) // 여러 개 추가 가능

// 하지만 가장 먼저 앞에 오게 만들고 싶다면 prepend를 사용한다.
const li1 = document.createElement("li")
li1.textContent = "li1"
friends.prepend(li1)

const li0 = document.createElement("li")
li0.innerHTML = "<b>친구들을 소개합니다!!</b>"
friends.prepend(li0)

// 요소 삭제
// x.remove() x요소를 삭제한다.
const firstLi = document.querySelector("li") // 위의 li0가 잡히낟.
firstLi.remove()

// x.removeChild(y) : x의 자식요소인 y를 삭제하겠음
// const ul = firstLi.parentNode
// ul.removeChild(firstLi)




