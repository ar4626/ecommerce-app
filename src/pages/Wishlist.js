import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';


const Wishlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUserWishlist();
    }, [])
    const getUserWishlist = () => {
        const result = dispatch(getUserProductWishlist());
    }
    const wishlistState = useSelector((state) => state.auth?.wishlist?.wishlist)
    // console.log(wishlistState);

    const removeFromWishlist = (id) =>{
        dispatch(addToWishlist(id));
    }
    return (
        <>
            <Meta title='Wishlist' />
            <BreadCrumb title='Wishlist' />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    {wishlistState.length=== 0 && <div className='text-center fs-3'>......Empty Wishlist......</div>}
                    {
                        wishlistState?.map((item, index) => {
                            return (
                                <div className='col-3' key={index}>
                                    <div className='wishlist-card position-relative' >
                                        <img 
                                            onClick={()=>{
                                                removeFromWishlist(item?._id);
                                                setTimeout(()=>{
                                                    dispatch(getUserProductWishlist());
                                                },300)
                                            }}
                                            className='position-absolute cross img-fluid'
                                            src='images\cross.svg'
                                            alt='cross'
                                        />
                                        <div className='wishlist-card-image bg-white d-flex align-items-center ' style={{ height: '220px' }}>
                                            <img
                                                width={160}
                                                
                                                className='img-fluid d-block mx-auto '
                                                src= {item?.images[0]?.url ? item?.images[0]?.url:''}
                                                alt='watch'
                                            />
                                        </div>
                                        <div className='py-3 px-3'>
                                            <h5 className='title'>
                                                {item?.title}
                                            </h5>
                                            <p className='price'>
                                                ${item?.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </Container>
        </>
    )
}

export default Wishlist