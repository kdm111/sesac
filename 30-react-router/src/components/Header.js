import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>HEADER</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link to="/photo">PHOTO</Link>
        </li>
      </ul>
    </header>
  )
}
