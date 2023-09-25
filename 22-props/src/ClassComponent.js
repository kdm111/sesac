import { Component } from "react"
import PropTypes from 'prop-types'

class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수가 필수이다.
  render() {
    console.log(this.props)
    const {name} = this.props;
    return (
      // <h1>hi {this.props.name}</h1>
      <>
        <h1>hi {name}</h1>
        <h2>여기는 ClassComponent</h2>
      </>

    )
  };
  // static defaultProps = {
  //   name : '홍길동'
  // };
  // static propTypes = {
  //   name : PropTypes.string
  // };
}

ClassComponent.defaultProps = {
  name : '홍길동'
};
ClassComponent.propTypes = {
  name : PropTypes.string.isRequired // isRequired : 필수 값 지정
};
export default ClassComponent