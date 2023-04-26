import React from 'react'
import '../CSS_files/Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const { cart } = useSelector((select) => select.ReducerSlice)

  return (
    <>
      <div className='navbar'>
        <div className="logo">
          <h1>Shopp Cart</h1>
        </div>
        <div className="menu-div">
          <ul>
            <div className="menu">
              <CloseIcon />
            </div>
            <Link to={'/home'}>
              <li>Home</li>
            </Link>
            <Link to={'/'}>
              <li>Product</li>
            </Link>
            <Link to={'cart'}>
              <li>Add to Cart {cart.length > 0 ?  <span> <ShoppingCartIcon/>{cart.length}</span> : null} </li>
            </Link>

          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar