import React from 'react'
import '../CSS_files/Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/ReducerSlice'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { product } = useSelector((select) => select.ReducerSlice)
  
  const addProduct = (ele) => {
    dispatch(addToCart(ele))
  }

  return (
    <>
      <div className='product'>
        {product.lenght > 0 ? <h1>Data not Fetch</h1>
          :
          product.map((ele) => {
            return <div key={ele.id} className="card" >
              <img src={ele.image} alt="product image" onClick={()=>{
              navigate(`/details/${ele.id}`)
            }} />
              <h2>{ele.category}</h2>
              <p>Price: {ele.price} $</p>
              <span>Free delivery</span>
              <button onClick={() => {
                addProduct(ele)
              }}>ADD TO CART</button>
            </div>

          })
        }

      </div>
    </>
  )
}

export default Product