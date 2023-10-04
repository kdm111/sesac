import { useState } from "react"


const Counter = () => {

  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }
  const alertMsg = (msg) => {
    alert(`${msg} 현재 숫자는 : ${number}`)
  }
  const consoleMsg = (e, msg) => {
    console.log(e.target)
    console.log(`${msg} 현재 숫자는 : ${number}`)
  }
  const handleEvent = (e) => {
    // currTarget은 이벤트 핸들 요소가 존재한다.
    // e.target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소
    // 
    console.log(e.target) // span
    console.log(e.currentTarget) // button
  }
  return (
    <div>
      <h1>number counter</h1>
      <h2>{number}</h2>
      {/* 함수에 인자가 없는 경우 함수 이름만 전달한다. */}
      <button onClick={increase}>increase</button>

      {/* 함수에 인자 보내기 */}
      <button onClick={() => {alertMsg("alert")}}>alert 출력</button>
      <button onClick={(e) => {consoleMsg(e, 'hi')}}>console 출력</button>

      {/* e.target vs e.currentTarget */}
      <button onClick={handleEvent}>
        <span>handle event</span>
      </button>
    </div>
  )
}
export default Counter