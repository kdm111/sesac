function Input(props) {
  const changeLetter= (e) => {
    // 1.
    // props.setLetter(e.target.value)
  }
  const {setData} = props

  return (
    <>
      내용 : {" "}
      <input
        type="text"
        // onChange={(e) => {changeLetter(e)}}
        onChange={(e) => {
          // setdata는 data를 넣을 수 있음
          setData((data) => {
            return {...data, letter : e.target.value}
          })
        }}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
