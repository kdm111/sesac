import React from 'react'
import style from './style/CssModule.module.css'

// 장점 class명 중복을 방지할 수 있다.
// 
export default function CssStyleComponent() {
  console.log([style.box, style.red].join(' ')) // object
  return (
    <>
    <h1>CSS MODULE STYLE</h1>
    <div className={style.container}>
      <div className={[style.box, style.red].join(' ')}>
        
      </div>
      <div className={[style.box, style.orange].join(' ')}>
        
      </div>
      {/* 백틱을 이용해서도 가능 */}
      <div className={`${style.box}  ${style.yellow}`}>
      
      </div>
    </div>
    </>
  )
}
