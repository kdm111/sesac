import React, {useReducer} from 'react'

const initState =  {value : 0}
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {value : prevState.value  + 1}
    case 'DECREMENT':
      return {value : prevState.value  - 1}
    case 'RESET':
      return {value : 0}
    default:
      return {value : 0}
  }  
}

export default function UseReducerEx() {
  // useState와 전반적으로 유사하나 복잡한 state 업데이트 로직을 다른 파일에서 모듈로 불러올 때 사용
  // reducer : 상태를 업데이트 하는 함수
  // dispatch : reducer가 어떻게 행동해야 하는 지 발생시키는 함수
  // state : 현재 상태
  const [state, dispatch] = useReducer(reducer, initState)
  const increment = () => {
    return dispatch({type : 'INCREMENT'})
  }
  const decrement = () => {
    return dispatch({type : 'DECREMENT'})
  }
  const reset = () => {
    return dispatch({type : 'RESET'})
  }
  return (
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
