import React from "react";
import "./App.css";


const userDetails = {
  customerName: "xyz",
  email: "abc@gmail.com",
  phone: "+263738492",
  appointmentOn:new Date(238936),
  status: "In progress",
  door: "Mark",
  companyName: "Alan Ford",
  num: '00005152'
}


function App() {
  return (
    <div className="site-container">
      <header className="header">
        <label>{userDetails.companyName}</label>
        <h5>{userDetails.num}</h5>
      </header>
      <div className="customer-info">
        <table>
          
          <tr>
            <td><b>Appointment on:</b></td>
            <td>{userDetails.appointmentOn.toLocaleDateString}</td>
          </tr>
          <tr>
            <td><b>Email:</b></td>
            <td>{userDetails.email}</td>
          </tr>
          <tr>
            <td><b>Phone:</b></td>
            <td>{userDetails.phone}</td>
          </tr>
        
        </table>
        
      </div>
      <div className="order-info">
      <table>
          <tr>
            <td><b>Status</b></td>
            <td><b>Door</b></td>
            <td><b>Time</b></td>
          </tr>
          <tr>
            <td>{userDetails.status}</td>
            <td> {userDetails.door}</td>
            <td>{userDetails.date}</td>
          </tr>
        </table>
      </div>
      <div className="product-list">
        <input className="product-containt" type="checkbox" />
        <div className="product-containt">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="customerImg" />
        </div>
        <div className="product-containt">
        <h5>{userDetails.customerName}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo cum sed cumque itaque nobis? Dolorem corporis deserunt perspiciatis, possimus porro, optio impedit dolorum aperiam facere minima est fugiat omnis!</p>
        </div>     
      </div>
    </div>
  );
}

export default App;
