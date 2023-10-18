const initialState = false
export const CHANGE = 'isVisible/CHANGE'
export const change = () => {return {type : CHANGE}}

const isVisibleReducer = (state = initialState, action) => {
  if (action.type === CHANGE) {
    return !state
  }
  return state
}

export default isVisibleReducer