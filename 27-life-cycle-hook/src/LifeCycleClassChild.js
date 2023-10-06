import React, { Component } from 'react'

export default class LifeCycleClassChild extends Component {
  componentDidMount() {
    console.log('child component mount')
  }
  componentDidUpdate() {
    console.log('child component update')
  }
  componentWillUnmount() {
    console.log('child component unmount')
  }
  render() {
    const {number} = this.props
    return (
      <div>
        <h1>현재 {number}값</h1>
      </div>
    )
  }
}
