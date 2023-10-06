import React, {useCallback, useState} from 'react'

// useCallback
// 매번 함수를 생성하지 않고 함수를 기억해두었다가 필요할 때마다 함수 호출
export default function UseCallbackEx() {
  const [text, setText] = useState('')

  // setText가 발생하면 함수를 다시 읽은 뒤 함수를 다시 리턴하는 렌더링이 계속발생한다.
  // 함수가 계속 생성되고 제거되며 changeText의 참조값은 계속해서 바뀌게 된다.
  // 미리 만들어진 함수를 다시 만드는 과정은 불필요한 작업이므로 useCallback을 사용한다.
  // useCallback은 함수에 대한 주소를 저장하고 다시 함수를 만들지 않는다.
  // 컴포넌트가 리렌더링이 되어도 의존성 배열에 있는 값이 바뀌지 않는 한 기존 함수를 계속해서 사용한다.
  const changeText = useCallback((e) => {
    setText(e.target.value)
  // 현재 의존성 배열에 있는 값이 존재하지 않으므로 다시 만들지 않는다.
  }, [])
  return (
    <div>
      <h1>
        useCallback
      </h1>
      <input 
        type='text'
        onChange={changeText}
      />
      <p>
        작성값 : {text || '없음'}
      </p>
    </div>
  )
}
