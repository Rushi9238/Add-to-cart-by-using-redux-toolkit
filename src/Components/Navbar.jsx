import React from 'react'
import '../CSS_files/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
// import { white } from '@mui/material/colors';
const Navbar = ({login}) => {
  const { cart } = useSelector((select) => select.ReducerSlice)
  const navigate = useNavigate()
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
              <li>Add to Cart {cart.length > 0 ? <span> <ShoppingCartIcon />{cart.length}</span> : null} </li>
            </Link>
            {/* <Link to={'login'}> */}
            <li><button onClick={() => {
              navigate('/login')
            }}><PersonIcon sx={{ fontSize: 30 }}/></button></li>
            {/* </Link> */}

          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar