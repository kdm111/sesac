import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App3 from './App3';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools }from 'redux-devtools-extension'
import rootReducer from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer : rootReducer }, composeWithDevTools())


// import store from './store'




root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App3 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
