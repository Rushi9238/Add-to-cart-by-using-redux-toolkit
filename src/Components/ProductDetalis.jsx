import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../CSS_files/ProductDetalis.css'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../Redux/ReducerSlice';

const ProductDetalis = () => {
    const { product } = useSelector((select) => select.ReducerSlice)
    const dispatch = useDispatch();

    const { id } = useParams()
    //   console.log(id);
    // console.log(product);
    const navigate = useNavigate()

    // ADD to cart button functionality 
    const addProduct = (ele) => {
        dispatch(addToCart(ele))
    }
    // Filter the product what user see now 
    const product_details = product.filter((ele) => {
        return ele.id == id
    })

    // The reaming Product Show logic 
    const remaining_products = product.filter((ele) => ele.id != id)
    // console.log(remaining_products);
    function get_Random_discount(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <>
            {
                product_details.map((ele) => {
                    return <div key={ele.id} className="details">
                        <div className="img-div" style={{ backgroundImage: `url(${ele.image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 80%' }} >
                            <button onClick={() => {
                                addProduct(ele)
                            }}>ADD to Cart</button>
                            <button>BUY NOW</button>
                        </div>
                        <div className="details-containe">
                            <h3>{ele.title} </h3>
                            <div className="rating">
                                <p>{ele.rating.rate} <StarIcon /></p>
                                <p>{Math.floor(Math.random() * 100)},{Math.floor(Math.random() * 1000)} Reating & {Math.floor(Math.random() * 10)},{Math.floor(Math.random() * 1000)} Reviews</p>
                            </div>
                            <div className="price">
                                <h1><CurrencyRupeeIcon sx={{ fontSize: 36 }} />{Math.floor((34 * ele.price * 80.44) / 100)}</h1>
                                <h3><CurrencyRupeeIcon sx={{ fontSize: 20 }} />{Math.floor(ele.price * 80.44)}</h3>
                                <p>34% off</p>

                            </div>
                            <div className="available_offers">
                                <h3> Available offers</h3>
                                <ul>
                                    <li><LocalOfferIcon sx={{ fontSize: 20 }} color='success' />  Bank OfferGet 10% Cashback on Samsung Axis bank Credit CardT&C</li>
                                    <li> <LocalOfferIcon sx={{ fontSize: 20 }} color='success' /> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
                                    <li> <LocalOfferIcon sx={{ fontSize: 20 }} color='success' /> Special PriceGet extra ₹35000 off (price inclusive of cashback/coupon)T&C</li>
                                    <li> <LocalOfferIcon sx={{ fontSize: 20 }} color='success' /> FreebieGet 200% Welcome Bonus upto ₹10000*T&C</li>
                                </ul>
                            </div>
                            <div className="description">
                                <p>Description</p>
                                <p>{ele.description}</p>
                            </div>
                            <div className="product_card">
                                {
                                    remaining_products.map((ele) => {
                                        return <div key={ele.id} className="card" onClick={() => {
                                            navigate(`/details/${ele.id}`)
                                        }}>
                                            <img src={ele.image} alt="" />
                                            <h3>{ele.title}</h3>
                                            <div className="suggection_price">
                                                <h1><CurrencyRupeeIcon sx={{ fontSize: 32 }} />{Math.floor((34 * ele.price * 80.44) / 100)}</h1>
                                                <h3><CurrencyRupeeIcon sx={{ fontSize: 19 }} />{Math.floor(ele.price * 80.44)}</h3>
                                                <p>34% off</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    // console.log(ele.image);
                })

            }

        </>
    )
}

export default ProductDetalis