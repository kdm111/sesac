const dates = $("td")
const dateInput = $("[name=date]")
const fillDate = (e) => {
  const date = e.target
  console.log(date)
  dateInput.val(date)
}
dates.click(fillDate)