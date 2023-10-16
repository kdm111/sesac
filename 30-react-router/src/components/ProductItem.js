import React from 'react'
import {Link} from 'react-router-dom'


export default function ProductItem(props) {
  const {product} = props
  return (
    <Link to={`${product.id}`} style={{
      all: 'unset', 
      cursor : 'pointer',

    }}>
      <li style={{
        width: '50%', 
        overflow : 'hidden', 
        whiteSpace: 'nowrap',
        textOverflow : 'ellipsis', 
        marginBottom : '2.5%',
        listStyle : 'none'
      }}>
        <span style={{fontWeight : '900'}}>
          {product.name}
        </span>
        <br />
        <span > - {product.body}</span>
        <hr style={{color : 'deepskyblue'}}/>
      </li>
    </Link>
  )
}
