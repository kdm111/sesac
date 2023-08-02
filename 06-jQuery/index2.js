// val() - value

// JS
function getValue() {
  // let inputVal = document.querySelector("input").value
  const value = $("input").val()
  alert(value)
  // return inputVal
}
function setValue() {
  // document.querySelector("input").value = "hihi!"
  let value = $("input").val("hihi")
}

// CSS
// JS는 첫번째 선택되는 엘리먼트만 적용된다.
function changeCssJS() {
  const span = document.querySelector("span")
  span.style="font-size:6rem; color:royalblue; font-weight:900;"
}
// 모든 요소가 바뀐다.
function changeCssJquery() {
  const span = $("span")
  span.css("font-size", "6rem")
  span.css("color", "gold")
  span.css("font-weight", "900")

  // CSS 속성을 한번에 적용하는 코드
  $("span").css({
    fontSize : "6rem",
  })
}
// 현재 CSS 값을 가져옴
function getCssJquery() {
  console.log(document.querySelector("span").style.color) // color 속성값이 리턴된다. royalblue
  console.log($("span").css("color")) // rgb가 리턴된다.
}
 

function changeAttrJS() {
  const anchor = document.querySelector("a")
  // anchor.setAttribute("href", "https://naver.com")
  anchor.href = "https://naver.com"
  anchor.innerText = "Naver" 
}

function changeAttrJquery() {
  $("a").attr("href", "https://daum.net")
  $("a").text("Daum")
}

function changeTextJS() {
  const pText = document.querySelector(".p-text")
  pText.innerText = "임의의 값 JS"
}
function changeTextJquery() {
  $(".p-text").text("임의의 값 jQuery")
}
function changeHtmlJS()  {
  const pHtml = document.querySelector(".p-html")
  pHtml.innerHTML = "<h3>javascript</h3>"

}
function changeHtmlJquery() {
  $(".p-html").html("<h2>jQuery</h2>")
}

function makeList() {
  const li = document.createElement("li")
  li.innerText = `${Math.floor(Math.random() * 100) + 1}`
  return li
}
function appendJS() {
  document.querySelector("ul.colors").append(makeList())
}

function appendJquery() {
  // $("ul.colors").append(makeList())
  $(".colors").append(`<li>${Math.floor(Math.random() * 100) + 1}</li>`)
}

function prependJS() {
  document.querySelector("ul.colors").prepend(makeList())
}

function prependJquery() {
  // $("ul.colors").prepend(makeList())
  $(".colors").prepend(`<li>${Math.floor(Math.random() * 100) + 1}</li>`)

}

function beforeJS() {
  const green = document.querySelector(".green")
  // green.parentNode.insertBefore(makeList(), green)
  green.before(makeList())
}

function beforeJquery() {
  $(".green").prepend(`<li>${Math.floor(Math.random() * 100) + 1}</li>`)

}
function afterJS() {
  const green = document.querySelector(".green")
  green.after(makeList())
}

function afterJquery() {
  $(".green").after(`<li>${Math.floor(Math.random() * 100) + 1}</li>`)

}

function removeJS() {
  document.querySelector("#li2").remove()
}
function removeJquery() {
  $("#li2").remove()
}
function emptyJS() {
  // 1.
  // while(document.querySelector("ul.nums").firstChild) {
  //   document.querySelector("ul.nums").firstChild.remove()
  // }

  // 2.
  // document.querySelectorAll("ul.nums > li").forEach((el) => {
  //   el.remove()
  // })

  // 3.
  document.querySelector("ul.nums").innerHTML = ""
}

function emptyJquery() {
  $("ul.nums").empty()
}

const child2 = document.querySelector(".child2")
const parent = document.querySelector(".parent")
function findParent() {
  // 1. JS
  // const parent = child2.parentElement
  // console.log(parent)

  // 2. jQuery
  console.log($(".child2").parent())
}
function findParents() {
  // JS에서는 제공하는 자바스크립트가 존재하지 않음
  console.log($(".child2").parents())

}
function findNext() {
  // const next = child2.nextElementSibling
  // console.log(next)
  
  console.log($(".child2").next())
}
function findPrev() {
  // const prev = child2.previousElementSibling
  // console.log(prev)
  console.log($(".child2").prev())

}
function findChildren() {
  // const children = parent.children
  // console.log(children)
  console.log($(".child2").children())

}

const hi = document.querySelector("#hi")
const hi2 = $("#hi")
function addClass() {
  // js
  // hi.classList.add("fs-50")
  // jQuery
  hi2.addClass("fs-50")

}
function removeClass() {
  // js
  // hi.classList.remove("fs-50")
  // jQuery
  hi2.removeClass("fs-50")
}

function hasClass() {
  // js
  // console.log(hi.classList.contains("fs-50"))
  // jQuery
  console.log(hi2.hasClass("fs-50"))
}

function toggleClass() {
  // js
  // hi.classList.toggle("bg-pink")
  // jQuery
  hi2.toggleClass("bg-pink")
}