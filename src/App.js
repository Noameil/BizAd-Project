import './App.css';
import React from 'react';
import Header from './components/Header.js';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Services from './components/Services.js';
import About from './components/About.js';


export default function App() {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  )
}

