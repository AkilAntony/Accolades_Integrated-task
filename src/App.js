 import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

import { Router, Routes ,Route} from 'react-router-dom';
import ContactPage from './Components/Contact Page/ContactPage';

function App() {
 
  return (
    <div className="App">
     <Navbar/>
  
      <Routes>
        <Route path ='/' element={<Home/>} ></Route>
        <Route path = '/home' element = {<Home/>} />
        <Route path = '/contact' element ={<ContactPage/>} />
      </Routes>
     
     
    
    </div>
  );
}

export default App;
