const dates = $("td")
const dateInput = $("[name=date]")
const contentInput = $("[name=content]")
const todoForm = $("#todoForm")

let target = -1
const fillDate = (e) => {
  target = e.target
  const date = e.target.innerHTML
  dateInput.val(`2023-08-${date}`)
}
dates.click(fillDate)


todoForm.on("submit", (e) => {
  e.preventDefault()
  if (contentInput.val() === '') {
    alert("내용을 입력해주세요")
  } else {
    console.log(target.parentNode)
    target.parentNode.style.verticalAlign = "top"
    target.innerHTML = `${target.innerHTML}<br><span style="font-size: 10px;">${contentInput.val()}</span>`
    dateInput.val("")
    contentInput.val("")

  }
})