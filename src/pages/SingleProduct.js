import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'



const SingleProduct = () => {
const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

    const props = { width: 600, height: 500, zoomWidth: 500, img: "https://monochrome-watches.com/wp-content/uploads/2022/10/Jacob-Co-Opera-Godfather-50th-Anniversary-Edition-9.jpg" };

    const [orderedProduct, setorderedProduct] = useState(false);
    return (
        <>
            <Meta title='Reset Password' />
            <BreadCrumb title='Reset Password' />
            <div className='main-product-wrapper home-wrapper-2 py-5 '>
                <div className='container-xxl p-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-image d-flex flex-wrap gap-15'>
                                <div>
                                    <img src='https://monochrome-watches.com/wp-content/uploads/2022/10/Jacob-Co-Opera-Godfather-50th-Anniversary-Edition-9.jpg' alt='watch' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='https://monochrome-watches.com/wp-content/uploads/2022/10/Jacob-Co-Opera-Godfather-50th-Anniversary-Edition-9.jpg' alt='watch' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='https://monochrome-watches.com/wp-content/uploads/2022/10/Jacob-Co-Opera-Godfather-50th-Anniversary-Edition-9.jpg' alt='watch' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='https://monochrome-watches.com/wp-content/uploads/2022/10/Jacob-Co-Opera-Godfather-50th-Anniversary-Edition-9.jpg' alt='watch' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>Mens Watch Stainless Steel Analog Watch Titanium cut</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>$100</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
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
                                        <p className='product-data'>Titan</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>watch </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availability :</h3>
                                        <p className='product-data'>In Stocks</p>
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
                                            <a href=''><TbGitCompare  className='fs-5 me-2'/> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=''><AiOutlineHeart className='fs-5 me-2'/> Add to 'Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-heading'>Shipping & Returns :</h3>
                                        <p className='product-data'>Free Shipping and return available on all orders! <br/> We ship all domestic orders within <b>5-6 Working days</b> </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Copy Product Link :</h3>
                                        <a href='javascript:void(0);' onClick={() => {
                                            copyToClipboard("https://monochrome-watches.com/wp-content/uploads/2022/10/Jacob-Co-Opera-Godfather-50th-Anniversary-Edition-9.jpg")
                                        }}>
                                            Copy product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper home-wrapper-2 py-5 '>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                    lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                    lorem ipsum dolor sit amet, consectetur adip nonum soc tempor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="review" className='reviews-wrapper home-wrapper-2 '>
                <div className='container-xxl'>
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
                </div>
            </section>
            <section className='popular-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
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
                </div>
            </section>
        </>
    )
}

export default SingleProduct