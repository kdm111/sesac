const initialState = {
  money : 0
}

export const DEPOSIT = 'bank/deposit'
export const WITHDRAW = 'bank/withdraw'


export const bankReducer = (state = initialState, action) => {
  switch(action.type) {
    case DEPOSIT:
      return {...state, money : state.money + action.money}
    case WITHDRAW:
      if (action.money > state.money) {
        return {...state}
      }
      return {...state, money : state.money - action.money}
    default:
      return state
  }
}