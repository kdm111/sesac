// 초기값 정의 
const initialState = {
  number : 50,
}
export const PLUS = 'counter/PLUS'
export const MINUS = 'counter/MINUS'

export const plus = () => {return {type : PLUS}}
export const minus = () => {return {type : MINUS}}

// reducer 정의 : 상태의 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {number : state.number + 1}
    case MINUS:
      return {number : state.number - 1}
    default:
      return state;
  }
}

export default counterReducer
