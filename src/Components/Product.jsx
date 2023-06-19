import React, { useEffect, useState } from 'react'
import '../CSS_files/Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/ReducerSlice'
import { useNavigate } from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';


const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((select) => select.ReducerSlice)

  // const [wishList,setWishList]=useState(false)
  // const addProduct = (ele) => {
  //   dispatch(addToCart(ele))
  // }
 
  return (
    <>
      <div className='product'>
        {product.lenght > 0 ? <h1>Data not Fetch</h1>
          :
          product.map((ele) => {
            return <div key={ele.id} className="card" >
              <FavoriteBorderIcon  />
              <img src={ele.image} alt="product image" onClick={() => {
                navigate(`/details/${ele.id}`)
              }} />
              <h3>{ele.title}</h3>
              <div className="suggection_price">
                <h1><CurrencyRupeeIcon sx={{ fontSize: 32 }} />{Math.floor((34 * ele.price * 80.44) / 100)}</h1>
                <h3><CurrencyRupeeIcon sx={{ fontSize: 19 }} />{Math.floor(ele.price * 80.44)}</h3>
                <p>34% off</p>
              </div>
              {/* <button  onClick={()=>{

              }}>Add Wish List</button> */}
            </div>

          })
        }

      </div>
    </>
  )
}

export default Product