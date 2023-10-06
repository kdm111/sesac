import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

export default function UseCallbackEx2(props) {
  const {postId} = props
  const [post, setPost] = useState({})
  const getPost = useCallback(async () => {
    // api에서 데이터 호출
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/11')
    console.log("getPost calling")
    setPost(response.data)
  }, [postId])
  // 이 코드의 문제는 useEffect에 들어있는 의존성 배열의 값은 함수의 주소값이다.
  // 함수의 주소값이 달라진다면 useEffect는 다시 실행된다. 따라서 요청이 계속해서 가게 된다.

  // useCallback을 postId에 의존하므로 postId가 바뀌지 않으면 getPost는 다시 생성되지 않는다.
  // 따라서 useEffect가 의존하는 getPost의 주소값 역시 바뀌지 않으므로 useEffect는 한 번만 실행된다.
  useEffect(() => {
    getPost()
  }, [getPost])
  return (
    <div>
      <h1>useCallback2</h1>
    {
      post.id ?
      post.title :
      <p>loading...</p>
    }
    </div>
  )
}
