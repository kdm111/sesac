import React, {useState} from 'react'

const CounterFn = (props) => {
  console.log(useState('welcome'))
  const [message, setMessage] = useState('welcome')
  // 'welcome' : 상태 초기값, 숫자 문자등 형태가 자유로움
  // message : 메시지 상태
  // setMessage() : message state 값을 바꾸는 함수
  function onClickEnter() {
    setMessage('hello')
  }
  function onClickLeave() {
    setMessage('bye')
  }
  return (
    // html : onClick='onClickEnter' : 문자열로 호출
    // js   : addEventListener('click', cb) : 괄호를 없애 클릭이 실행되었을 때 바로 실행되도록 하게 만듦
    // react : onClick={onClickEvent} -> JS와 동일하게 
    <div>
      <button
        onClick={onClickEnter}
      >입장</button>
      <button
        onClick={onClickLeave}
      >퇴장</button>
      <h1>{message}</h1>
    </div>
  )
}
export default CounterFn;