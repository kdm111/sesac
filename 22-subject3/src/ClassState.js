import React, {Component, useState} from "react"

class ClassState extends Component {
	// state = {
  //   number : 0
  // } 
  constructor(props) {
    super(props)
    this.state = {
      number : 0
    }
  }
  render() {
  const { number } = this.state;
  function decrease (props) {
    return () => {
      props.setState({number : number - 1})
    }
  }
  return (
    <div>
      <h3>Class Number: {number}</h3>
      <button
        onClick={() => {
          this.setState({number : number + 2})
        }}
      >+2</button>
      <button
        onClick={
          decrease(this)
        }
      >-1</button>
    </div>
  )
 }
}

export default ClassState;