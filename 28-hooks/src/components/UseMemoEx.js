import React, {useState, useMemo} from 'react'

// useMemo
// 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  
  // calc는 시간이 오래 걸리는 연산을 하는 함수
  // input에 값이 들어갈 때도 useMeMo가 렌더링 되면서 calc가 실행되며 rendering이 오래 걸린다.
  // useMemo는 특정값을 기억해서 바뀔 때만 연산되도록 최적화 할 수 있다.
  // const calc = () => {
  //   console.log("calc")
  //   for (let i = 0; i < 2 * 10 ** 9; i++) {
      
  //   }
  //   return count ** 2
  // }
  // useMemo사용
  // input을 변경해도 실행이 되지 않는다.
  // count값이 변경될 때만 실행됨
  // 쓰는 목적은 함수의 리턴값을 기억할 때 사용하기 위함
  const calc = useMemo(() => {
    console.log("calc calling")
    for (let i = 0; i < 10 ** 9; i++) {
      
    }
    return count ** 2
  }, [count])
  return (
    <div>
      <h1>useMemo Hook</h1>
      <input type='text' 
        onChange={
          (e) => {
            setInput(e.target.value)
          }
        }
      />
      <button
        onClick={() => {
          setCount(count + 1)
        }}  
      >Plus</button>
      <p>count : {count}</p>
      <p>calc : {calc}</p>
    </div>
  )
}
