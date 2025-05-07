import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import Products_page from './Products_page.jsx'
import Product_detail from './Product_detail.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/products' element={<Products_page/>}/>
        <Route path='/product_detail/:id' element={<Product_detail/>}/>


      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
