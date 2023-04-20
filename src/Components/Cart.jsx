import React from 'react'
import '../CSS_files/Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../Redux/ReducerSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((select) => select.ReducerSlice)
  
  const removeCart = (id) => {
    const remove = cart.filter((ele) => {
      return ele.id !== id
    })

    dispatch(removeToCart(remove))
  }
  return (
    <>
      {cart.length===0 ? <h1 style={{textAlign:'center',margin:'5rem'}}>Your cart is Empty</h1>:
       <div className='product'>
        {cart.lenght > 0 ? <h1>Data not Fetch</h1>
          :
          cart.map((ele) => {
            return <div key={ele.id} className="card">
              <img src={ele.image} alt="product image" />
              <h2>{ele.category}</h2>
              <p>Price: {ele.price} $</p>
              <span>Free delivery</span>
              <button onClick={() => {
                removeCart(ele.id)
              }}>Remove Cart</button>
            </div>

          })
        }

      </div> 
      }
    </>
  )
}

export default Cart