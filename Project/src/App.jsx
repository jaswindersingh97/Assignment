import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './Components/NavBar';
import CartPage from './pages/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<div className='container'>
<BrowserRouter>
  <Routes>
    <Route path={"/"} element={<HomePage/>}/>
    <Route path={"/cart"} element={<CartPage/>}/>
  </Routes>
</BrowserRouter>
</div>
  )
}

export default App
