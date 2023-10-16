import React, {useState, useEffect} from 'react'
import { productInfos } from '../pages/ProductPage'
import { useParams, useNavigate } from 'react-router-dom'

export default function ProductDetail() {
  const {productId} = useParams()
  const [product, setProduct] = 
    useState(productInfos[Number(productId) - 1])
  const [topBtnShow, setTopBtnShow] = useState(false)
  const [scroll, setScroll] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0,0)
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 300) {
        setTopBtnShow(true)
      } else {
        setTopBtnShow(false)
      }
    })
  }, [])
  return (
    <article>
      <h1>PRODUCT {product.id} DETAIL</h1>
      <button
        onClick={() => {
          navigate(-1)
        }}
      >뒤로가기</button>
      <button
        onClick={() => {
          navigate('/')
        }}
      >홈으로 이동하기</button>

      <ul>
        <li>상품 번호 : {product.id}</li>
        <li>상품명 : {product.name}</li>
        <li>판매자 : {product.email}</li>
        <li>상품 설명 : {product.body}</li>
      </ul>
      {
        (topBtnShow)
        ?
        <button
          style={{
            position : 'fixed',
            bottom : '0',
            right : '0',
            width: '100px',
            height : '100px',
            borderRadius : '50%'
          }}
          onClick={() => {
            window.scrollTo(0,0)
          }}
        >top</button>
        :
        null
      }
    </article>
  )
}
