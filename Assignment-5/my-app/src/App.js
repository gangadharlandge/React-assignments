import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import '../src/App.css';
import Post from './component-2/post';
import Home from '../src/component-1/Home';



function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/post" element={<Post/>}/>
    
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
