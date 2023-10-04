import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import { useState } from 'react'

function App() {
  // useState를 사용해 상태관리
  // 1. 4가지 상태를 만들어 관리
  // const [color, setColor] = useState('white')
  // const [letter, setLetter] = useState('글자글자')
  // const [bgColor, setBgColor] = useState('black')
  // const [fruit, setFruit] = useState('apple.png')

  // 2. 한 가지의 상태를 만들어 관리
  const [data, setData] = useState({
    fruit : 'apple',
    bgColor : 'black',
    color : 'white',
    letter : '글자글자'
  })
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select
          // 1.
          // setBgColor={setBgColor}
          // setLetterColor={setLetterColor}
          // setFruit={setFruit}
          // 2.
          setData={setData}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input 
          // 1.
          // setLetter={setLetter}
          setData={setData}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result 
          // 1.
          // fruit={fruit}
          // bgColor={bgColor}
          // color={color}
          // letter={letter}

          // 2.
          data={data}
        />
      </div>
    </>
  );
}

export default App;
