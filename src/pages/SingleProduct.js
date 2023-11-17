import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { Link, useLocation } from 'react-router-dom'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAProduct } from '../features/products/productSlice'



const SingleProduct = () => {

    const location = useLocation();
    const getProductId = location.pathname.split('/')[2];
    // console.log(getProductId);
    const dispatch = useDispatch();
    const productState = useSelector(state => state.product.singleproduct)
    console.log(productState)
    useEffect(() => {
        dispatch(getAProduct(getProductId))
    }, [])


    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    const props = { width: 590, height: 200, zoomWidth: 500, img: productState?.images[0]?.url };

    const [orderedProduct, setorderedProduct] = useState(false);
    return (
        <>
            <Meta title='Single Product' />
            <BreadCrumb title='Single Product' />
            <Container class1='main-product-wrapper home-wrapper-2 py-5 '>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-image d-flex flex-wrap gap-15'>
                            {
                                productState?.images.map((item, index) => {
                                    return (
                                        <div key={index} style={{ width: '210px', height: '140px', overflow:'hidden' }}>
                                            <img 
                                            src={item?.url} 
                                            alt='watch' 
                                            className='img-fluid'
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                             />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>{productState?.title}</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>${productState?.price}</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                        value={Number(productState?.totalratings)}
                                        edit={false}
                                    />
                                    <p className='mb-0 t-review' >(2 reviews)</p>
                                </div>
                                <a className='review-btn' href='#review' >Write a Review</a>
                            </div>
                            <div className='py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3>
                                    <p className='product-data'>Analog</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3>
                                    <p className='product-data'>{productState?.brand}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category :</h3>
                                    <p className='product-data'>{productState?.category}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags :</h3>
                                    <p className='product-data'>{productState?.tags} </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availability :</h3>
                                    <p className='product-data'>{productState?.quantity > 0 ? "In Stocks" : "Stock Out"}</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border bolder-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border bolder-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border bolder-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border bolder-1 bg-white text-dark border-secondary'>XL</span>
                                        <span className='badge border bolder-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 '>
                                    <h3 className='product-heading'>Color :</h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity :</h3>
                                    <div className=''>
                                        <input
                                            className='form-control'
                                            type='number'
                                            name=''
                                            style={{ width: "50px" }}
                                            id=''
                                            min={1}
                                            max={5}
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center gap-30 ms-5'>
                                        <button className='button border-0'>Buy Now</button>
                                        <Link to='/signup' className='button signup'>Add to Cart</Link>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href=''><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href=''><AiOutlineHeart className='fs-5 me-2' /> Add to 'Wishlist</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns :</h3>
                                    <p className='product-data'>Free Shipping and return available on all orders! <br /> We ship all domestic orders within <b>5-6 Working days</b> </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Copy Product Link :</h3>
                                    <a href='javascript:void(0);' onClick={() => {
                                        copyToClipboard(window.location.href)
                                    }}>
                                        Copy product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='description-wrapper home-wrapper-2 py-5 '>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p dangerouslySetInnerHTML={{ __html: productState?.description }}></p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container id="review" class1='reviews-wrapper home-wrapper-2 '>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4>Customer Review</h4>
                                    <div className='d-flex align-items-center gap-10 '>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={false}
                                        />
                                        <p className='mb-0'>Based on 2 reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='review-form py-4'>
                                <h4>Write a Review</h4>
                                <form className='d-flex flex-column gap-15' action=''>
                                    <div >
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={true}
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name=''
                                            id=''
                                            className=' form-control'
                                            cols="30"
                                            rows='4'
                                            placeholder='Comments'
                                        ></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4' >
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center '>
                                        <h6 className='mb-0'>Ankit Raj</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={false}
                                        />
                                    </div>
                                    <p className='mt-3'>
                                        lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                        lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                        lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                    </p>
                                </div>
                                <div className='review'>
                                    <div className='d-flex gap-10 align-items-center '>
                                        <h6 className='mb-0'>Ankit Raj</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={false}
                                        />
                                    </div>
                                    <p className='mt-3'>
                                        lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                        lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                        lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='popular-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12 '>
                        <h3 className='section-heading'>
                            Our Popular Products
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}

export default SingleProduct