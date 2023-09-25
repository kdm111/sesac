import { Component } from "react";
import PropTypes from 'prop-types'
class ClassComponent extends Component {
  render() {
    const {valid, text} = this.props
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={showConsole} > 콘솔 메시지 </button>
      </div>
    )
    function showConsole() {
      if (valid) {
        console.log("콘솔 띄우기 성공")
      }
    }
  }
  static defaultProps = {
    text : '이건 기본 text props입니다.'
  }
  static propTypes = {
    text : PropTypes.string.isRequired,
  }
}

export default ClassComponent