import React from 'react'

export default function Post(props) {
  const {title, body} = props.post
  const {no} = props
  return (
    <div className='post'>
      <h4 className='post-title'>No.{no} {title}</h4>
      <p className='post-content'>{body}</p>
    </div>
  )
}
