import {Box1, Box2, Box3, Box4} from '../App4'
import { useSelector, useDispatch } from 'react-redux'
import {plus, minus} from '../store/couterReducer'

export const Box1Container = () => {
  return (<Box1 />)
}

export const Box2Container = () => {
  return (<Box2 />)
}

export const Box3Container = () => {
  return (<Box3 />)
}

export const Box4Container = () => {
  const number = useSelector((state) => {return state.counter.number})
  const dispatch = useDispatch()

  
  return (<Box4 
    number={number}
    plus={() => {return dispatch(plus())}}
    minus={() => {return dispatch(minus())}}
  />)
}