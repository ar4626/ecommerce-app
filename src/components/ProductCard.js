import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import watch1 from "../images/watch-11.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const ProductCard = (props) => {
    const { grid } = props;
    // console.log(grid);
    let location = useLocation();
    // console.log(location)
    return (
        <>
            <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"} `}>
            <Link to={`${location.pathname==='/' || location.pathname==='/product/:id' ? '/product/:id': ':id'}`} className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wishlist} alt='wishlist-icon' />
                        </button>
                    </div>
                    <div className='product-images'>
                        <img src={watch} className='img-fluid' alt='Product Images' />
                        <img src={watch1} className='img-fluid' alt='Product Images' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={3}
                            edit={false}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At the eve of the christmas the santa will be comming to give chocolates to the childern and fullfill there wishes
                        </p>
                        <p className='price'>$100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"} `}>
            <Link to={`${location.pathname==='/' || location.pathname==='/product/:id' ? '/product/:id': ':id'}`} className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wishlist} alt='wishlist-icon' />
                        </button>
                    </div>
                    <div className='product-images'>
                        <img src={watch} className='img-fluid' alt='Product Images' />
                        <img src={watch1} className='img-fluid' alt='Product Images' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={3}
                            edit={false}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At the eve of the christmas the santa will be comming to give chocolates to the childern and fullfill there wishes
                        </p>
                        <p className='price'>$100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            
        </>
    )
}

export default ProductCard