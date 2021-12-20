import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const userDetails = {
  customerName: "xyz",
  email: "abc@gmail.com",
  phone: "+263738492",
  date:"10:30 (17-12-2021)",
  status: "In progress",
  door: "Mark",
  companyName: "Alan Ford",
  num: '00005152'
}

ReactDOM.render(
  <React.StrictMode>
    <App userDetails = {userDetails}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
