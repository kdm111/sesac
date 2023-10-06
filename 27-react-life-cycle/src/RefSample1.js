import { useRef } from 'react'

export default function RefSample1 () {
  // 1. ref 객체 만들기
  const inputRef = useRef()
  const pRef = useRef()
  
  const handleFocus = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
    pRef.current.style.color = 'green'
  }
  return (
    <>
      <p ref={pRef}>함수형 컴포넌트에서 버튼 클릭시 input에 포커스가 갑니다.</p>
      <input type="text" ref={inputRef}/>
      <button
        onClick={handleFocus}
      >
        클릭
      </button>
    </>
  )
}