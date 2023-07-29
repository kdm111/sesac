const val1 = document.querySelector("#value1")
const val2 = document.querySelector("#value2")
const op = document.querySelector("#op")
const result = document.querySelector("#result")

let val1Ready = false
let val2Ready = false
let opReady = false

val1.addEventListener('input', (e) => {
  if (isNaN(Number(e.target.value) && e.target.value != '')) {
    val1.style.backgroundColor = "red";
    val1Ready = false
  } else {
    val1.style.backgroundColor = "green";
    val1Ready = true    
  }
})

val2.addEventListener('input', (e) => {
  if (isNaN(Number(e.target.value)) && e.target.value != '') {
    val2.style.backgroundColor = "red";
    val2Ready = false
  } else {
    val2.style.backgroundColor = "green";
    val2Ready = true
  }
})

op.addEventListener('input', (e) => {
  const opValue = e.target.value.trim()
  if (opValue == '+' || opValue == '-' || opValue == '*' || opValue == '/') {
    op.style.backgroundColor = "green";
    opReady = true
  } else {
    op.style.backgroundColor = "red";
    opReady = false
  }
})


function cal() {
  if (val1Ready && val2Ready && opReady) {
    const opValue = op.value.trim()
    if (opValue == '+') {
      result.value = Number(val1.value) + Number(val2.value)
    } else if (opValue == '-') {
      result.value = Number(val1.value) - Number(val2.value)
    } else if (opValue == '*') {
      result.value = Number(val1.value) * Number(val2.value)
    } else {
      result.value = Number(val1.value) / Number(val2.value)
    }
    val1.setAttribute("disabled", true)
    val2.setAttribute("disabled", true)
    op.setAttribute("disabled", true)
    result.style.backgroundColor = "green";

  } else {
    alert("입력 폼을 확인해 주세요!")
  }
}

function clean() {
  val1.value = ""
  val2.value = ""
  op.value = ""
  result.value = ""
  val1.style.backgroundColor = "white";
  val2.style.backgroundColor = "white";
  op.style.backgroundColor = "white";
  val1.removeAttribute("disabled")
  val2.removeAttribute("disabled")
  op.removeAttribute("disabled")
  result.style.backgroundColor = "white"
}