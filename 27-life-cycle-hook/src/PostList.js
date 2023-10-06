import React, {useEffect, useState} from 'react'
import Post from './Post'
import axios from 'axios'

export default function PostList() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setTimeout(async () => {

      const arr = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(arr.data.slice(0, ))
    }, 2000)
  }, [])
  return (
    <div className='post-list'>
      {
        posts.length ?
        posts.map((el, idx) => {
          return ( 
          <Post
              key={idx+1}
              post={el}
              no={idx+1}
            />)
        })   :
        <p>loading...</p>
      }
    </div>
  )
}
