import React, {useEffect, useState} from 'react'
import LifeCycleFuncChild from './LifeCycleFuncChild'

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0)
  const [visible, setVisible] = useState(true)
  
  useEffect(() => {
    console.log("parentComponent Mount")
  }, [])
  const plusNumber = () => {
    setNumber(number + 1)
  }

  return (
    <div style={{backgroundColor:'lime'}}>
      <h1>부모 컴포넌트</h1>
      <button
        onClick={plusNumber}
      >plus</button>
      <button
        onClick={() => {setVisible(true)}}
      >on</button>
            <button
        onClick={() => setVisible(false)}
      >off</button>
      {
        visible &&
        <LifeCycleFuncChild 
          number={number}
          visible={visible}
        />
      }
    </div>
  )
}

