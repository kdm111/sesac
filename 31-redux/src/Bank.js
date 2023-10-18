import { useSelector, useDispatch } from "react-redux"
import {DEPOSIT, WITHDRAW} from './store/bankReducer'
import {useState, useRef} from 'react'

export const Bank = () => {
  const money = useSelector((state) => {return state.bank.money})
  const dispatch = useDispatch()
  const [temp, setTemp] = useState("")
  const moneyInput = useRef()
  const [error, setError]= useState("")
  const nullNumberErrorMsg = "정확한 금액을 입력해주세요." 
  const overMoneyErrorMsg = "출금 금액이 더 높습니다."
  const checker = (msg) => {
    console.log(msg.includes('-'))
    return msg.includes('-')
  }
   return (
    <>
      <h1>은행</h1>
      <h1>잔액 : {money}원</h1>
      <input 
        type="number" 
        value={temp}
        min="0"
        placeholder="금액을 입력해주세요"
        ref={moneyInput}
        onChange={(e) => {
          const value = e.target.value
          if (checker(value) || Number(value) <= 0 || value === '') {
            setTemp("")
          } else {
            setTemp(Number(e.target.value))
          }
          setError("")
        }}
        onKeyDown= {(e) => {
          if (e.key === 'Enter') {
            if (temp === 0 || temp === "") {
              moneyInput.current.focus()
              setError(nullNumberErrorMsg)
              return ;
            }
            dispatch({type : DEPOSIT, money : temp})
            setTemp("")
          }
        }}
      />
      <button onClick={() => {
        if (temp === 0 || temp === "") {
          moneyInput.current.focus()
          setError(nullNumberErrorMsg)
          return ;
        }
        dispatch({type : DEPOSIT, money : temp})
        setTemp("")
      }}>입금</button>
      <button onClick={() => {
        if (temp > money) {
          moneyInput.current.focus()
          setError(overMoneyErrorMsg)
          return ;
        } else if (temp === 0 || temp === "") {
          moneyInput.current.focus()
          setError(nullNumberErrorMsg)
          return ;
        }
        dispatch({type : WITHDRAW, money : temp})
        setTemp("")  
      }}>출금</button>
      <p>{error || ""}</p>
    </>
  )
}
