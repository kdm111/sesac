
const tbody = document.querySelector("tbody")
const buttonGroup = document.querySelector("#button-group")

function createVisitor() {
  const form = document.forms["visitor-form"]
  axios({
    method : "post",
    url : "/visitor",
    data : {
      name : form.name.value,
      comment : form.comment.value
    }
  })
  .then((res) => {
    console.log("post visitor에 대한 응답", res)
    const {id, name,comment} = res.data
    console.log(id, name, comment)
    const newComment = `
      <tr id=tr_${id}>
        <td>${id}</td>
        <td>${name}</td>
        <td>${comment}</td>
        <td><button onclick="editComment()">수정</button> </td>
        <td><button onclick="deleteComment()">삭제</button></td>
      </tr>
    `
    tbody.insertAdjacentHTML("afterbegin", newComment)
    tbody.insertAdjacentHTML
  })
  
}

function editComment() {

}
function deleteComment() {

}