import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { collectData } from './Redux/ReducerSlice';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Product from './Components/Product'
import './App.css';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch('https://fakestoreapi.com/products')
      const res = await api.json()
      dispatch(collectData(res))
    }
    fetchData()
  }, [])
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
   
  );
}

export default App;
