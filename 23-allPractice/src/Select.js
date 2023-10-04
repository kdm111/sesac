function Select(props) {
  const  changeFruit = (e) => {
    // 1.
    // props.setFruit(`${e.target.value}.png`)
  }
  const changeBgColor = (e) => {
    // 1.
    // props.setBgColor(e.target.value)

  }
  const changeColor = (e) => {
    // 1.
    // props.setLetterColor(e.target.value)

  }
  const { setData }  = props
  return (
    <>
      과일 :
      <select onChange={(e) => {
        // changeFruit(e)
        // setData 함수는 전체 리턴하는 데이터로 데이터가 셋된다.
        const fruit = e.target.value
        setData((data) => {
          return {...data, fruit}
        })
      }}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색 :
      <select onChange={(e) => {
        // changeBgColor(e)
        setData((data) => {
          return {...data, bgColor : e.target.value}
        })
      }}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      글자색 :
      <select onChange={(e) => {
        // changeColor(e)
        setData((data) => {
          return {...data, color : e.target.value}
        })
      }}>
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
    </>
  );
}

export default Select;
