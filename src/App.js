import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Signin from './pages/Signin'
import Register from './pages/Register'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route path="/signin" element={<Signin />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;

