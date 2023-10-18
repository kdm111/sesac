import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools }from 'redux-devtools-extension'


const root = ReactDOM.createRoot(document.getElementById('root'));
// 초기값 정의 
const initialState = {
  number : 50,
}
// reducer 정의 : 상태의 변화를 일으키는 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return {number : state.number + 1}
    case 'MINUS':
      return {number : state.number - 1}
    default:
      return state;
  }
}

// import store from './store'
// store 정의 : 전역 상태를 관리하기 위한 공간
const store = configureStore({ reducer : reducer }, composeWithDevTools())


root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App2 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
