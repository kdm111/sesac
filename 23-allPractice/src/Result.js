
function Result(props) {
  const {fruit, bgColor, color, letter} = props.data
  return (
    <div style={{ display: "block"}}>
      {/* <img src={`${props.fruit}`} width={100} height={100} alt='fruit 사진'/> */}
      {/* 리액트에서는 자동으로 public 폴더에 있는 static 이미지를 찾아간다. */}
      <img src={`${fruit}.png`} width={100} height={100} alt='fruit 사진'/>

      {/* <img src="apple.png" width={100} height={100} alt='fruit 사진'/> */}
      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          // backgroundColor: `${props.bgColor}`,
          backgroundColor: `${bgColor}`,
          // color: `${props.letterColor}`,
          color: `${color}`,
        }}
      >
        {/* {props.letter} */}
        {letter}
      </div>
    </div>
  );
}

export default Result;
