import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">HOME으로 이동</Link>
    </div>
  )
}
