
import React, { Component } from 'react'

export default class RefSample3 extends Component {
  handleFocus = () =>{
    // 여기서 this는 컴포넌트 자기 자신
    console.log(this.inputRef)
    this.inputRef.focus()  
  }
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭 시 input에 focus</p>
        <input type='text' ref={(ref) => {return this.inputRef = ref}}/>
        <button 
          onClick={this.handleFocus}
        >클릭</button>
      </div>
    )
  }
}
