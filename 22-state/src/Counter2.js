import {useState} from 'react'

const Counter2 = (props) => {
  const [number, setNumber] = useState(0)
  const add = () => {setNumber(number + 1)}
  const {value} = props
  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={add}
      >{value}</button>
    </div>
  )
}
export default Counter2