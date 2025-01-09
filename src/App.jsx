import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './assets/paginas/Home';

function App() {
 

  return (
    <Routes>
          <Route path="/" element={<Home/>} />
         
    </Routes>
  )
}

export default App
