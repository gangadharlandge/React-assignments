import React from 'react';
import {Link } from 'react-router-dom';
import './Home.css'



function home() {
  return (
    <div className="wrapper">
      <div className="img-container">
        <img src="https://i.pinimg.com/564x/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg" alt="pic" />
      
      </div>
      <div className="content">
        <h1>Instaclone</h1>
        <Link to="/post"><button>Enter</button></Link>
  
      </div>
      
        
    </div>
  );
}

export default home;