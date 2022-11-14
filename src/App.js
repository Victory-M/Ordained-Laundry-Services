import React, { useState } from 'react';
import "./index.css"
import { Routes,Route } from "react-router-dom";
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Services from './routes/Services';

const App = () => {  

  return (
    <>
      <Routes>
        <Route path ="/" element ={<Home/>} />
        <Route path ="/services" element ={<Services/>} />
        <Route path ="/about" element ={<About/>} />
        <Route path ="/contact" element ={<Contact/>} />
      </Routes>
    </>
   
  );

}

export default App;

