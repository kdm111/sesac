import React from 'react'
import './style/SassComponent.scss'

export default function SassComponent() {
  return (
    <>
    <h1>SASS STYLE</h1>
    <div className="container">
      <div className="box red hover">
        
      </div>
      <div className="box orange">
        
      </div>
      {/* 백틱을 이용해서도 가능 */}
      <div className="box yellow">
      
      </div>
    </div>
    <button className='btn'>클릭</button>
    <button className='btn-primary'>클릭</button>

    </>
  )
}
