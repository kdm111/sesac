const Form = (props) => {
  const {inputData, setInputData} = props
  const changedForm = (e) => {
    console.log(e)
    // setInputData({...inputData, })
  }
  const resetForm = () => {
    setInputData({name : "", title : ""})
  }
  return (
    <>
      <label for='name'>작성자</label>
      <input placeholder='작성자' name='name' id='name'
        onChange={(e) => {
          changedForm(e)}}
        value={inputData.name}
      />
      <label for='title'>제목</label>
      <input placeholder='제목' name='title' id='title'
        onChange={(e) => {setInputData((data) => {
          return {...data, title : e.target.value}
        })}}
        value={inputData.title}

      /> 
      <button
        onClick={resetForm}
      >
        작성
      </button>
    </>
  )
}
export default Form
