import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import watch from '../images/watch.jpg'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import { useEffect } from 'react'
import { getUserCart, removeProductFromCart, updateProductFromCart } from '../features/user/userSlice'
import { useState } from 'react'

const Cart = () => {
    const dispatch = useDispatch();
    const [updatedProductDetail, setUpdatedProductDetail] = useState(null)
    const [totalAmount, setTotalAmount] = useState(null)

    const userCartState = useSelector(state => state.auth.cartProducts)
    // console.log(userCartState)
    // console.log(userCartState[0]?.color.title)


    let subtotal = 0;
    for (let i = 0; i < userCartState?.length; i++) {
        subtotal += (userCartState[i].price * userCartState[i].quantity);
    }
    // console.log(subtotal)


    useEffect(() => {
        dispatch(getUserCart());
    }, [])

    useEffect(() => {
        if (updatedProductDetail !== null) {
            const cartDetail = { cartItemId: updatedProductDetail?.cartItemId, newQuantity: updatedProductDetail?.quantity }
            // console.log(cartDetail);
            dispatch(updateProductFromCart(cartDetail));
            setTimeout(() => dispatch(getUserCart()), 300);
        }
    }, [updatedProductDetail])

    const deleteACartProduct = (id) => {
        dispatch(removeProductFromCart(id));
        setTimeout(() => dispatch(getUserCart()), 300);

    }

    useEffect(() => {
        let subtotal = 0;
        for (let i = 0; i < userCartState?.length; i++) {
            subtotal += (userCartState[i].price * userCartState[i].quantity);
            setTotalAmount(subtotal)
        }
    }, [userCartState])

    return (
        <>
            <Meta title='My Cart' />
            <BreadCrumb title='My Cart' />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='cart-header py-3 d-flex justify-content-center align-items-center'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        {
                            userCartState && userCartState?.map((item, index) => {
                                return (
                                    <div key={index} className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                            <div className='w-25'>
                                                <img src={watch} className='img-fluid' alt='watch' />
                                            </div>
                                            <div className='w-75 px-3' >
                                                <h5 className='title'>{item?.productId?.title}</h5>
                                                {/* <p >Sizeasdf</p> */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>Color :
                                                    <div style={{ backgroundColor: item?.color.title, height: '30px', width: '30px', borderRadius: "50%", marginLeft: '10px' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cart-col-2 '>
                                            <h5 className='price '>$ {item?.price}</h5>
                                        </div>
                                        <div className='cart-col-3 d-flex align-items-center gap-15' >
                                            <div>
                                                <input
                                                    className='form-control'
                                                    type='number'
                                                    name=''
                                                    id=''
                                                    min={1}
                                                    max={10}
                                                    value={updatedProductDetail?.quantity ? updatedProductDetail?.quantity : item?.quantity}
                                                    onChange={(e) => {
                                                        setUpdatedProductDetail({ cartItemId: item?._id, quantity: e.target.value });
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <AiFillDelete
                                                    onClick={() => {
                                                        deleteACartProduct(item?._id);
                                                    }}
                                                    className='text-danger fs-5'
                                                />
                                            </div>
                                        </div>
                                        <div className='cart-col-4'>
                                            <h5 className='price'>$ {item?.quantity * item?.price}</h5>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='col-12 py-2 mt-4'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                            <Link to="/product" className='button'>Continue To Shopping</Link>
                            {
                                (totalAmount !== null || totalAmount !== 0) &&
                                <div className='d-flex flex-column align-items-end'>
                                    <h4>SubTotal : ${subtotal}</h4>
                                    <p> Taxex and shipping calculated at checkout</p>
                                    <Link to="/checkout" className='button'>Checkout</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart