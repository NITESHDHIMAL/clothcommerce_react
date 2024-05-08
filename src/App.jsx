import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'
import Addproduct from './pages/Addproduct'
import Product from './pages/Product'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails/:id' element={<Productdetails />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
