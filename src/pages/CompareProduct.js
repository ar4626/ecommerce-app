import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'

const CompareProduct = () => {
    return (
        <>
            <Meta title='Compare Products' />
            <BreadCrumb title='Compare Products' />
            <div className='compare-product-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img
                                    className='position-absolute cross img-fluid'
                                    src='images\cross.svg'
                                    alt='cross'
                                />
                                <div className='compare-product-card'>
                                    <div className='product-card-image'>
                                        <img
                                            src='images\watch.jpg'
                                            alt='watch'
                                        />
                                    </div>
                                    <div className='compare-product-details'>
                                        <h5 className='title'>
                                            Redmi Note 11 Pro Plus 5G 8GB Ram 128GB ROM AMOLED Display
                                        </h5>
                                        <h6 className='price mb-3 mt-3'>
                                            $100
                                        </h6>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Brand:</h5>
                                        <p>Redmi</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Type:</h5>
                                        <p>Smartphone</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Availability:</h5>
                                        <p>inStocks</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Color:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img
                                    className='position-absolute cross'
                                    src='images\cross.svg'
                                    alt='cross'
                                />
                                <div className='compare-product-card'>
                                    <div className='product-card-image'>
                                        <img
                                            src='images\watch.jpg'
                                            alt='watch'
                                        />
                                    </div>
                                    <div className='compare-product-details'>
                                        <h5 className='title'>
                                            Redmi Note 11 Pro Plus 5G 8GB Ram 128GB ROM AMOLED Display
                                        </h5>
                                        <h6 className='price mb-3 mt-3'>
                                            $100
                                        </h6>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Brand:</h5>
                                        <p>Redmi</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Type:</h5>
                                        <p>Smartphone</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Availability:</h5>
                                        <p>inStocks</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Color:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5 >Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct