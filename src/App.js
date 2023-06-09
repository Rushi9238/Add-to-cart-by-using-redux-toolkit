import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { collectData } from './Redux/ReducerSlice';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Product from './Components/Product'
import Login from './Components/Login'

import './App.css';
import ProductDetalis from './Components/ProductDetalis';
// import Footer from './Components/Footer';

function App() {
  const [login,logout]=useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
     try {
      const api = await fetch('https://fakestoreapi.com/products')
      const res = await api.json()
      dispatch(collectData(res))
      
     } catch (error) {
      console.log(error);
     }
    }
    fetchData()
  }, [])
//   const handelInfiniteScroll=()=>{
//     console.log('Scroll height'+ document.documentElement.scrollHeight);
//     console.log('scroll inner height'+ window.innerHeight );
//     console.log('all page height'+ document.documentElement.scrollHeight);
//   }
// useEffect(()=>{
//   window.addEventListener('scroll',handelInfiniteScroll)
// },[])
  return (
      <div className="App">
         {/* {
        login ? <Navbar/> : null

      } */}
      <Navbar login={login}/>
        <Routes>
          <Route path='/home'  element={login ? <Home/> : <Login login={login} logout={logout}/>} />
          {/* <Route path='/' element={login ? <Product />: <Login login={login} logout={logout}/>} /> */}
          <Route path='/' element={<Product/>}/>
          <Route path="/login" element={<Login login={login} logout={logout} />} />
          <Route path='/cart' element={login ? <Cart /> : <Login login={login} logout={logout}/>} />
          <Route path='/details/:id' element={login ? <ProductDetalis/> : <Login login={login} logout={logout}/>}/>
          <Route path='*' element={<h1 style={{textAlign:'center',marginTop:'5rem'}}>404 Page Not found</h1>}/>
          
        </Routes>
        {/* {
        login ? <Footer/> : null
      } */}
      </div>
   
  );
}

export default App;
