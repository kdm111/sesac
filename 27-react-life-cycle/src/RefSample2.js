import {useRef, useState} from 'react'

export default function RefSample2 () {
  const count = useRef(1)
  const [number, setNumber] = useState(1)
  const countUp = () => {
    count.current += 1
  }
  const numberUp = () => {
    setNumber((data) => {return data+1})
  }
  return (
    <>
      <p>함수형 컴포넌트에서 버튼 클릭시 count값을 1씩 증가</p>
      <h1>ref : {count.current}</h1>
      <button
        onClick={countUp}
      >
        클릭
      </button>
      <p>리렌더링을 비교하기 위해 state와 비교하여 사용</p>
      <h1>state : {number}</h1>
      <button
        onClick={numberUp}
      >
        클릭
      </button>
    </>
  )
}