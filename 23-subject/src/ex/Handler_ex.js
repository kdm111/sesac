import React, {Component} from 'react'

class HandlerEx extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg : 'Hello World'
    }
  }
  change = (msg) => {
    this.setState({msg : msg})
    console.log(msg)
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => {this.change('Goodbye world!')}}>클릭</button>
      </div>
    )
  }
}
export default HandlerEx