import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    // console.log(location)
    return (
        <>
            <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images\wish.svg' alt='wishlist-icon' />
                        </Link>
                    </div>
                    <div className='product-images'>
                        <img src='images\watch.jpg' className='img-fluid' alt='Product Images' />
                        <img src='images\watch-11.jpg' className='img-fluid' alt='Product Images' />
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
                            <Link>
                                <img src='images\prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images\view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images\add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images\wish.svg' alt='wishlist-icon' />
                        </Link>
                    </div>
                    <div className='product-images'>
                        <img src='images\watch.jpg' className='img-fluid' alt='Product Images' />
                        <img src='images\watch-11.jpg' className='img-fluid' alt='Product Images' />
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
                            <Link>
                                <img src='images\prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images\view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images\add-cart.svg' alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard