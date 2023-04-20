import React from 'react'
import '../CSS_files/Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/ReducerSlice'

const Product = () => {
  const dispatch = useDispatch();
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
            return <div key={ele.id} className="card">
              <img src={ele.image} alt="product image" />
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