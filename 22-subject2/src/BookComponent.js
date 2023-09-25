import PropTypes from 'prop-types'
import dog from './dog.jpeg'

export default function BookComponent(props) {
  const {title, author, price, type} = props
  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:'500px', flexDirection: 'column', backgroundColor : 'beige', width:'50%'}}>
      <h1 style={{color:'orange'}}>이번 주 베스트 셀러</h1>
      <img src={dog} alt='강아지 사진' />
      <h1>{title}</h1>
      <div style={{textAlign : 'start', width: '90%'}}>
        <h2>저자 : {author}</h2>
        <h2>판매가 : {price}원</h2>
        <h2>구분 : {type}</h2>
      </div>
    </div>
  )

}

BookComponent.defaultProps = {
  title :'책 제목',
  author : '홍길동',
  price : 1000,
  type : '책 타입'
}

BookComponent.propTypes = {
  title : PropTypes.string.isRequired,
  author : PropTypes.string.isRequired,
  price : PropTypes.number,
  type : PropTypes.string
}