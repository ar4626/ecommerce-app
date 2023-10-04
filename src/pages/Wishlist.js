import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Wishlist = () => {
    return (
        <>
            <Meta title='Wishlist' />
            <BreadCrumb title='Wishlist' />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    className='position-absolute cross img-fluid'
                                    src='images\cross.svg'
                                    alt='cross'
                                />
                                <div className='wishlist-card-image'>
                                    <img
                                        className='img-fluid w-100'
                                        src='images\watch.jpg'
                                        alt='watch'
                                    />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Redmi watch Pro 2 AmoLED Display with Wifi and Bluetooth
                                    </h5>
                                    <p className='price'>
                                        $100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    className='position-absolute cross img-fluid'
                                    src='images\cross.svg'
                                    alt='cross'
                                />
                                <div className='wishlist-card-image'>
                                    <img
                                        className='img-fluid w-100'
                                        src='images\watch.jpg'
                                        alt='watch'
                                    />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Redmi watch Pro 2 AmoLED Display with Wifi and Bluetooth
                                    </h5>
                                    <p className='price'>
                                        $100
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img
                                    className='position-absolute cross img-fluid'
                                    src='images\cross.svg'
                                    alt='cross'
                                />
                                <div className='wishlist-card-image'>
                                    <img
                                        className='img-fluid w-100'
                                        src='images\watch.jpg'
                                        alt='watch'
                                    />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Redmi watch Pro 2 AmoLED Display with Wifi and Bluetooth
                                    </h5>
                                    <p className='price'>
                                        $100
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist