const table = document.querySelector("#table")
const form = document.querySelector("#form")
let visitorLogNum = 1
table.setAttribute("border", 1)
table.setAttribute("cellspacing", 0.5)
table.setAttribute("cellpadding", 10)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const writer = document.querySelector("input[name=writer]")
  const content = document.querySelector("input[name=content]")
  if (writer.value == '') {
    alert("작성자를 입력해주세요")
  } else if (content.value == '') {
    alert("내용을 입력해주세요")
  } else {
    addTable(writer.value, content.value)
  }
})

function addTable(writerValue, contentValue) {
  const log = document.createElement('tr')
  const logNum = document.createElement('td'); logNum.innerText = visitorLogNum
  visitorLogNum += 1
  const writer = document.createElement('td'); writer.innerText = writerValue
  const content = document.createElement('td'); content.innerText = contentValue
  const logDate = document.createElement('td'); 
  const today = new Date()
  logDate.innerText = today.getFullYear() + '-'
                    + String(Number(today.getMonth()) + 1) + '-' + 
                      today.getDate() + ' ' +
                      today.getHours() + ' : ' +
                      today.getMinutes()
  log.append(logNum, writer, content, logDate)
  table.append(log)
}