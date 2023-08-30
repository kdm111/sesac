

function signIn() {
  const form = document.forms["users-form"]
  const data = {
    userid : form.userid.value,
    pw : form.userpassword.value,
    name : form.username.value
  }
  axios.post({
    method : "post",
    url : "/user/register",
    data : data,
  })
  .then((res) => {
    console.log(res)
  })
}