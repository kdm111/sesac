
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
        <td><button onclick="editComment(${id})">수정</button> </td>
        <td><button onclick="deleteVisitor(this, ${id})">삭제</button></td>
      </tr>
    `
    tbody.insertAdjacentHTML("afterbegin", newComment)
    tbody.insertAdjacentHTML
  })
  
}

function deleteVisitor(obj, id) {
  console.log(obj, id)
  if (!confirm("정말 삭제하시겠습니까?")) {
    return ;
  }
  axios({
    method : "delete",
    url : "/visitor",
    data : {
      id : id
    }
  })
  .then((res) => {
    console.log("delete 요청에 대한 응답", res.data)
    alert("삭제 성공")
    obj.parentElement.parentElement.remove() // button > td > tr로 넘어가서 삭제
  })
}
