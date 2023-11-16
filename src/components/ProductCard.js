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
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';


const ProductCard = (props) => {
    const { grid, data } = props;
    const dispatch = useDispatch();
    // console.log(grid);
    console.log(data);
    let location = useLocation();
    // console.log(location)
    const addToTheWishlist = (id) => {
        // alert(id)
        dispatch(addToWishlist(id))
    }
    return (
        <>
            {
                Array.isArray(data) && data.map((item, index) => {
                    return (
                        <div
                           
                            className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"} `}
                        >
                            <Link
                                to={`${location.pathname === '/' || location.pathname === '/product/:id' ? '/product/:id' : ':id'}`}
                                className='product-card position-relative'
                            >
                                <div className='wishlist-icon position-absolute'>
                                    <button
                                        className='border-0 bg-transparent'
                                        onClick={(e) => { addToTheWishlist(item._id) }}
                                    >
                                        <img src={wish} alt='wishlist-icon' />
                                    </button>
                                </div>
                                <div className='product-images'>
                                    <img
                                        src={item?.images[0]?.url}
                                        className='img-fluid  mx-auto'
                                        alt='Product Images'
                                        width={160}
                                    />
                                    <img
                                        src={watch1}
                                        className='img-fluid mx-auto'
                                        alt='Product Images'
                                        width={160}
                                    />
                                </div>
                                <div className='product-details'>
                                    <h6 className='brand'>{item?.brand}</h6>
                                    <h5 className='product-title'>
                                        {item?.title}
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={Number(item?.totalratings)}
                                        edit={false}
                                    />
                                    <p
                                        className={`description ${grid === 12 ? "d-block" : "d-none"}`}
                                        dangerouslySetInnerHTML={{ __html: item?.description }}
                                    >

                                    </p>
                                    <p className='price'>${item?.price}</p>
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
                    )
                })
            }
        </>
    )
}

export default ProductCard