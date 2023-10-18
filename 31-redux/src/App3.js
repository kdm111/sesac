import logo from './logo.svg';
import react, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './styles/box.css'

// 이 경우 사용하지 않는 데이터라도 계속해서 prop으로 내려야 한다.
function Box1() {
  return (
    <>
      <div className='box'>
        <Box2/>
      </div>
    </>
  )
}
function Box2() {
  return (
    <>
      <div className='box'>
        <Box3/>
      </div>
    </>
  )
}
function Box3() {
  return (
    <>
      <div className='box'>
        <Box4 />
      </div>
    </>
  )
}
function Box4() {
  const number = useSelector((state) => {return state.counter.number})
  const isVisible = useSelector((state) => {return state.isVisible})
  console.log(isVisible)
  const dispatch = useDispatch()

  return (
    <>
      <div className='box'
        style={{
          minWidth : '400px',
          flexDirection : 'column',
          justifyContent : 'space-around',
          alignContent : 'space-around',
        }}
      >
        <h2>box4 : {number}</h2>
        {/* <br /> */}
        <h2>{ isVisible ? 'Visible' : 'inVisible'}</h2>
        <div>
          <button onClick={() => dispatch({type : 'CHANGE'})}>change</button>

          <button onClick={() => dispatch({type : 'PLUS'})}>plus</button>
          <button onClick={() => dispatch({type : 'MINUS'})}>minus</button>

        </div>
      </div>
    </>
  )
}

function App() {
  const number = useSelector((state) => state.counter.number)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>{number}</h1>
      <Box1 />
      <button onClick={() => dispatch({type : 'PLUS'})}>plus</button>
      <button onClick={() => dispatch({type : 'MINUS'})}>minus</button>
    </div>
  );
}

export default App; // 한 번만 가능 굳이 일치하지 않아도 
