import React from 'react'


export default function PhotoItem(props) {
  const {id, title, url} =  props.photo
  
  return (
    <li>
      <p
        style={{fontWeight : '900'}}
      >사진 제목 : {title}</p>
      <img 
        style={{width : '200px', height : '200px'}}
        src={url}
        alt="product_image"
      />
    </li>
  )
}
