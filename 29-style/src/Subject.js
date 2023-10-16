import React, {useState} from 'react'
import PostList from './PostList'
import './style/total.scss'
export default function Subject() {
  return (
    <div className='post-list-container'>
      <h1 className='title'>Post List</h1>
      <PostList />
    </div>
  )
}
