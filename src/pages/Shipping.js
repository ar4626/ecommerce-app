import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import watch from '../images/watch.jpg'
import { IoIosArrowBack } from 'react-icons/io'
import Container from '../components/Container'

const Shipping = () => {
    return (
        <>
            <Meta title='Checkout' />
            <Container class1='checkout-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className="col-7">
                        <div className='checkout-left-data'>
                            <h3 className='website-name'>DevCorner</h3>
                            <nav
                                style={{ "--bs-breadcrumb-divider": "'>'" }}
                                aria-label="breadcrumb"                                >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/cart" style={{ "color": "#212529" }}>
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item " aria-current="page">
                                        <Link to="/cart" style={{ "color": "#212529" }}>
                                            Information
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Shipping
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>

                            <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to="/checkout" className='text-dark'>
                                            <IoIosArrowBack className='me-2' /> Return To Cart
                                        </Link>
                                        <Link to="/payment" className='button'>Continue to Payment</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className='d-flex gap-10 mb-2 align-items-center'>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span className='badge bg-secondary text-white rounded-circle p-2 position-absolute' style={{ "top": "-10px", "right": "2px" }}>
                                            1
                                        </span>
                                        <img src={watch} alt='product' className='img-fluid' />
                                    </div>
                                    <div>
                                        <h5 className='total-price'>
                                            Redmi watch pro AmoLED Display
                                        </h5>
                                        <p className='total-price'>
                                            <span id='product-size'>S</span>
                                            /
                                            <span id='product-color'>#777777</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='flex-grow-1 '>
                                    <h5 className='total'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Sub Total</p>
                                <p className='total-price'>$ 200</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$ 12.23</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 10000</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Shipping