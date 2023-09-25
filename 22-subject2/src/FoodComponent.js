import PropTypes from 'prop-types'

export default function FoodComponent (props) {
  return (
    <div style={{fontSize:'32px'}}>
      제가 좋아하는 음식은 <span style={{color : 'red', fontSize:'56px'}}>{props.food}</span>입니다.
    </div>
  )
}

FoodComponent.defaultProps = {
  food : '김치'
}
FoodComponent.propTypes = {
  food : PropTypes.string.isRequired
}