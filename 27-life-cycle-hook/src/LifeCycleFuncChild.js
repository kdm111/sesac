import React,{ useEffect, useState } from 'react'

export default function LifeCycleFuncChild(props) {
  const [input, setInput] = useState('')
  // 의존성 배열이 빈 배열 이므로 mount 시점에 함수는 실행됨
  // []은 오직 mount 시점에 한 번만 실행됨
  // []이 아니라면 mount, update 시에 실행된다.
  // 배열안에 값이 존재한다면 배열 안의 값이 변할 때 리렌더링한다.
  const {number, visible} = props
  useEffect(() => {
    console.log("child componentMount")
  }, [])
  useEffect(() => {
    // unmount
    return () => {
      console.log("child component unmount")
    }
  }, [])
  // update시 바뀔 때 업데이트 실헙
  useEffect(() => {
    console.log('input 형태가 변경될 때마다 컴포넌트 업데이트')
  }, [input])
  useEffect(() => {
    console.log('number 형태가 변경될 때마다 컴포넌트 업데이트')
  }, [number])
  return (
    <div style={{backgroundColor : 'orchid'}}>
      <h1>자식 컴포넌트</h1>
      <h1>{number}</h1>
      <input 
        type="text"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />
    </div>
  )
}

// 단축 평가
// 평가하는 시간을 짧게 줄임
// && || 연산자를 주로 사용
// A && B : 둘 다  (논리곱)
// A || B : 하나만  (논리합)