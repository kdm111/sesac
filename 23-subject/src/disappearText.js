import {useState} from 'react'

const DisappearText = () => {
  const [text, setText] = useState('안녕하세요')
  const [isClicked, setIsClicked] = useState(false)
  
  const disappear = () => {
    setText('')
    setIsClicked(true)
  }
  const appear = () => {
    setText('안녕하세요')
    setIsClicked(false)
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={isClicked ? appear : disappear}>{isClicked ? "보여라" : "사라져라"}</button>
    </div>
  )
}

export default DisappearText