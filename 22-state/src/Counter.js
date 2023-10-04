import React, { Component } from 'react';


class Counter extends Component () {
  // 기존버전
  // constructor (props) {
  //   // super 부모 클래스 참조하라는 명령어
  //   // super 호출시 현재 클래스가 상속받고 있는 React의 Component가 가진 생성자 함수를 호출함.
  //   super(props);
  //   this.state = {
  //     number : 0
  //   };
  // }
  state = {
    number : 0
  }
  render() {
    const { number } = this.state
    return (
      <div>
        <h3> Counter : { number } </h3>
        <button onClick={() => {
          // 직접 변경 불가능 setState 사용
          this.setState({number : number + 1});
        }}
        >
          +1
        </button>
        <button 
          onClick={() => {
            alert(number)
          }}
        >
          숫자 띄우기
        </button>
      </div>
    )
  }
}

export default Counter;