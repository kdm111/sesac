// store 정의 : 전역 상태를 관리하기 위한 공간
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools }from 'redux-devtools-extension'
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './couterReducer'
import isVisibleReducer from './isVisibleReducer'
import { bankReducer } from './bankReducer';

const rootReducer = combineReducers({
  counter : counterReducer,
  isVisible : isVisibleReducer,
  bank : bankReducer,
})

export default rootReducer

// export default store
