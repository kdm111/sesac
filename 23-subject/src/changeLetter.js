import {useState} from 'react'
import './changeLetter.css'

const ChangeSentence = () => {
  const [Sentence, setSentence]  = useState('검정색 글씨') 
  const [color, setColor]  = useState('black') 

  const makeRed = () => {
    setSentence('빨간색 글씨')
    setColor('red')
  }
  const makeBlue = () => {
    setSentence('파란색 글씨')
    setColor('blue')
  }
  return (
    <div>
      <h1 className={color}>{Sentence}</h1>
      <button onClick={makeRed}>빨간색</button>
      <button onClick={makeBlue}>파란색</button>
    </div>
  )
}

export default ChangeSentence