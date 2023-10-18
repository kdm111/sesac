import logo from './logo.svg';

import react, { useState } from 'react'
import './styles/box.css'
// 이 경우 사용하지 않는 데이터라도 계속해서 prop으로 내려야 한다.
function Box1({number, plus, minus}) {
  return (
    <>
      <div className='box'>
        <Box2
          number={number}
          plus={plus}
          minus={minus}
        />
      </div>
    </>
  )
}
function Box2({number, plus, minus}) {
  return (
    <>
      <div className='box'>
        <Box3
          number={number}
          plus={plus}
          minus={minus}
        />
      </div>
    </>
  )
}
function Box3({number, plus, minus}) {
  return (
    <>
      <div className='box'>
        <Box4 
          number={number}
          plus={plus}
          minus={minus}
          />
      </div>
    </>
  )
}
function Box4({number, plus, minus}) {
  return (
    <>
      <div className='box'>
        <h2>box4 : {number}</h2>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
      </div>
    </>
  )
}

function App() {
  const [number, setNumber] = useState(100)
  const plus = () => {
    setNumber(number + 1)
  }
  const minus = () => {
    setNumber(number - 1)
  }
  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>{number}</h1>
      <Box1 
        number={number}
        plus={plus}
        minus={minus}
      />
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>

    </div>
  );
}

export default App;
