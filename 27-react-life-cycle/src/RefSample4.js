import React, { Component } from 'react'

export default class RefSample4 extends Component {
  inputRef = React.createRef()
  handleFocus = () => {
    console.log(this)
    console.log(this.inputRef.current)
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트에서 버튼 클릭 시 input에 focus</p>
        {/* ref props 사용해서 ref 설정 */}
        <input type='text' ref={this.inputRef}/>
        <button 
          onClick={this.handleFocus}
        >클릭</button>
      </div>
    )
  }
}
