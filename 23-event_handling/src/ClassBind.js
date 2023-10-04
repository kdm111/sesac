import {Component} from 'react'

class ClassBind extends Component {
  constructor(props) {
    super(props)
    // 클래스 컴포넌트에서 이벤트 사용방법 - bind 사용
    // js에서는 this 호출하는 방법에 의해 결정한다.
    // 함수가 호출될 때마다 this가 다를 수 있다. 따라서 bind를 사용한다.
    // bind 메서드는 호출되는 방법과 무관하게 this를 묶어버린다.
    // 
    // this.printConsole = this.printConsole.bind(this) // 없다면 printConsole에서 this는 undefined가 뜬다.
    console.log('constructor this', this)
    this.state = {
      number : 0
    }
  }
  // 1. 일반 함수
  printConsole() {
    console.log('printConsole this', this)
    // console.log(this.state.number) // bind가 없다면 this가 undefined이기 때문에 
  }

  // 2. class component에서 이벤트 사용하기
  // 화살표 함수를 사용하면 bind없이 this를 사용할 수 있다.
  // 화살표 함수는 this가 존재하지 않고 선언되는 시점에 상위 스코프가 this로 알아서 bind된다.
  // printConsole = () => {
  //   console.log('printConsole this', this)
  //   // state에 접근 가능
  //   console.log(this.state.number)
  // }
  printConsole2 = (msg) => {
    console.log(msg)
  }
  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자X)</button>
        <button onClick={() => {this.printConsole2('msg')}}>printConsole2(인자O)</button>
        <button onClick={this.printConsole2.bind(null, 'msg')}>printConsole2(bind 사용)</button>
      </div>
    )
  }
}

export default ClassBind