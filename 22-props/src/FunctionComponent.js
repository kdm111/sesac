import PropTypes from 'prop-types'

export default function FunctionComponent(props) {
  const {name} = props;
  return (
    <div>
      <h1>hi {name}</h1>
      <h2>여기는 FunctionComponent</h2>
    </div>
  )
}
FunctionComponent.defaultProps = {
  name : 'Props에서 전달받은 이름이 없습니다.'  
}

FunctionComponent.propTypes = {
  // name은 오직 문자열만 받을 수 있음
  name : PropTypes.string
}