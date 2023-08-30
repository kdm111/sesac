
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
        <td><button onclick="editVisitor(${id})">수정</button> </td>
        <td><button onclick="deleteVisitor(this, ${id})">삭제</button></td>
      </tr>
    `
    tbody.insertAdjacentHTML("afterbegin", newComment)
    tbody.insertAdjacentHTML
  })
  
}
function editVisitor(id) {
  // id를 가지고 방명록 하나를 조회 == 각 input에 value값에 저장
  // axios({
  //   method : "get",
  //   url : `/visitor/?id=${id}`
  // }) // query
  axios({
    method : "get",
    url : `/visitor/${id}`,
  }) // params
  .then((response) => {
    const {name, comment} = response.data.result[0]
    const form = document.forms["visitor-form"]
    form.name.value = name
    form.comment.value = comment
    // 변경, 취소 버튼 보이기
    const btns = `
      <button type="button" onClick="doEdit(${id})">변경</button>
      <button type="button" onClick="cleanForm()">취소</button>
    `
    buttonGroup.innerHTML = btns;
  })
}
// 실제 수정 요청
function doEdit(id) {
  const form = document.forms["visitor-form"]
  axios({
    method : "patch",
    url : "/visitor",
    data : {
      id : id,
      name : form.name.value,
      comment : form.comment.value
    }
  })
  .then((response) => {
    if (response.data.isUpdated) {
      alert("수정이 완료되었습니다.")
      // location.href="/visitors"
    }
    const tr = document.querySelector(`#tr_${id}`).children
    tr[1].textContent = form.name.value
    tr[2].textContent = form.comment.value
    form.name.value = ""
    form.comment.value = ""
    buttonGroup.innerHTML = `<button type="button" onclick="createVisitor()" id="visitorFormBtn">등록</button>`
  })
}

function deleteVisitor(obj, id) {
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
    alert("삭제 성공")
    obj.parentElement.parentElement.remove() // button > td > tr로 넘어가서 삭제
    cleanForm()
  })
}
function cleanForm() {
  const form = document.forms["visitor-form"]
  form.name.value = ""
  form.comment.value = ""
  buttonGroup.innerHTML = `<button type="button" onclick="createVisitor()" id="visitorFormBtn">등록</button>`
}
