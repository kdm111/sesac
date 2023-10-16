import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import '../styles/main.css'
export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get('mode')) // searchParams에서 데이터를 꺼내고 싶을 때는 'get'메서드를 사용한다.
  return (
    <div className={["main", searchParams.get('mode') === 'dark' ? 'dark' : ''].join(' ')}>
      <h1>MainPage</h1>
      <Link to="/product">product로 이동</Link>
      {/* a태그르 사용하게 되면 서버로 요청을 보내 새로운 html파일을 받아오므로 완전 똑같지 않다. */}
      <br />
      {/* <a href="http://localhost:3000/product">product로 이동</a> */}
      <button
        onClick={() => {
          setSearchParams((e) => {
            if (e.get('mode') === 'dark') {
              return {mode : 'light'}
            } else {
              return {mode : 'dark'}
            }
          })
          
        }}
      >Dark Mode</button>
    </div>
  )
}
