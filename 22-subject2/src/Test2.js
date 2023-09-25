import { Component } from "react"
import dog from './dog.jpeg'

class Test2 extends Component {
  render() {
    const style = {
      'fontSize' :  '40px',
      'color' : 'orange',
      'marginTop' : '20px'
    }
    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={dog} alt='강아지사진'/>
      </div>
    )
  } 
  
}
export default Test2