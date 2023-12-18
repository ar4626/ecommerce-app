import React from 'react'
import Meta from '../components/Meta'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import watch from '../images/watch.jpg'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { config } from '../utils/axiosConfig'
import { createAnOrder } from '../features/user/userSlice'

const shippingSchema = yup.object({
    firstname: yup.string().required("*First Name is required"),
    lastname: yup.string().required("*Last Name is required"),
    mobile: yup.string().required("*Mobile No. is required"),
    address: yup.string().required("*Address Details is required"),
    state: yup.string().required("*State is required"),
    city: yup.string().required("*City is required"),
    country: yup.string().required("*country is required"),
    pincode: yup.string().required("*Pincode is required"),
    landmark: yup.string().required("*Landmark is required"),

});

const Checkout = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.auth.cartProducts)
    const [totalAmount, setTotalAmount] = useState(null)
    const [shippingInfo, setShippingInfo] = useState(null)
    const [paymentInfo, setPaymentInfo] = useState({ razorpayOrderId: "", razorpayPaymentId: "" })
    const [cartProduct, setCartProduct] = useState([])

    console.log(paymentInfo, shippingInfo)

    useEffect(() => {
        let subtotal = 0;
        for (let i = 0; i < cartState?.length; i++) {
            subtotal += (cartState[i].price * cartState[i].quantity);
            setTotalAmount(subtotal)
        }
    }, [cartState])

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            country: '',
            mobile: '',
            state: '',
            pincode: '',
            landmark: '',
        },
        validationSchema: shippingSchema,
        onSubmit: (values) => {
            setShippingInfo(values);
            setTimeout(() => {
                checkoutHandler()
            }, 300)
        },
    });

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false);
            }
            document.body.appendChild(script);
        });
    }


    useEffect(() => {
        let items = [];
        for (let i = 0; i < cartState?.length; i++) {
            items.push({
                product: cartState[i]?.productId._id,
                quantity: cartState[i]?.quantity,
                color: cartState[i]?.color._id,
                price: cartState[i]?.price
            })
        }
        setCartProduct(items);
    }, []);



    const checkoutHandler = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            alert("RazorPay SDK failed to load")
        }
        const result = await axios.post("http://localhost:4000/api/user/order/checkout", {amount:totalAmount + 50}, config)
        if (!result) {
            alert("Something went wrong")
            return;
        }
        const { amount, id: order_id, currency } = result.data.order
        // console.log(result)
        const options = {
            key: 'rzp_test_jXc0MFF2bMxWtO', // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: "Ankit Raj",
            description: "Test Transaction",
            image: {},
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                };

                const result = await axios.post("http://localhost:4000/api/user/order/paymentVerification", data, config);


                setPaymentInfo({
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                })

                const orderDetail={
                    totalPrice: totalAmount,
                    totalPriceAfterDiscount: totalAmount,
                    orderItems: cartProduct,
                    paymentInfo,
                    shippingInfo
                }
                console.log("final")
                dispatch(createAnOrder(orderDetail));

            },
            prefill: {
                name: "RAJ's Store",
                email: "ankitraj832@gmail.com",
                contact: "9386001023",
            },
            notes: {
                address: "Hazaribagh",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Information
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        Shipping
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className='title total'>
                                Contact Information
                            </h4>
                            <p className='user-details total'>Ankit Raj (ankitrak832@gamil.com)</p>
                            <h4 className='mb-3'>Shipping Address</h4>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select
                                        name='country'
                                        onChange={formik.handleChange("country")}
                                        onBlur={formik.handleBlur("country")}
                                        value={formik.values.country}
                                        className='form-control form-select' id=''
                                    >
                                        <option value="" selected disabled>Select Country</option>
                                        <option value="India"  > India</option>
                                        <option value="Srilanka"  >Srilanka</option>
                                        <option value="UK"  >UK</option>
                                    </select>
                                    <div className='error'>
                                        {formik.touched.country && formik.errors.country}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        className='form-control '
                                        placeholder='First Name'
                                        type='text'
                                        name='firstname'
                                        onChange={formik.handleChange("firstname")}
                                        onBlur={formik.handleBlur("firstname")}
                                        value={formik.values.firstname}
                                    />
                                    <div className='error'>
                                        {formik.touched.firstname && formik.errors.firstname}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        className='form-control '
                                        placeholder='Last Name'
                                        type='text'
                                        name='lastname'
                                        onChange={formik.handleChange("lastname")}
                                        onBlur={formik.handleBlur("lastname")}
                                        value={formik.values.lastname}
                                    />
                                    <div className='error'>
                                        {formik.touched.lastname && formik.errors.lastname}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        className='form-control '
                                        placeholder='Address'
                                        type='text'
                                        name='address'
                                        onChange={formik.handleChange("address")}
                                        onBlur={formik.handleBlur("address")}
                                        value={formik.values.address}
                                    />
                                    <div className='error'>
                                        {formik.touched.address && formik.errors.address}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        className='form-control '
                                        placeholder='Landmark'
                                        type='text'
                                        name='landmark'
                                        onChange={formik.handleChange("landmark")}
                                        onBlur={formik.handleBlur("landmark")}
                                        value={formik.values.landmark}
                                    />
                                    <div className='error'>
                                        {formik.touched.landmark && formik.errors.landmark}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        className='form-control '
                                        placeholder='City'
                                        type='text'
                                        name='city'
                                        onChange={formik.handleChange("city")}
                                        onBlur={formik.handleBlur("city")}
                                        value={formik.values.city}
                                    />
                                    <div className='error'>
                                        {formik.touched.city && formik.errors.city}
                                    </div>
                                </div>
                                <div className='flex-grow-1 '>
                                    <select
                                        className='form-control form-select '
                                        id=''
                                        name='state'
                                        onChange={formik.handleChange("state")}
                                        onBlur={formik.handleBlur("state")}
                                        value={formik.values.state}
                                    >
                                        <option value="" selected disabled>Select State</option>
                                        <option value="ranchi"  >Ranchi</option>
                                    </select>
                                    <div className='error'>
                                        {formik.touched.state && formik.errors.state}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        className='form-control '
                                        placeholder='PinCode'
                                        type='text'
                                        name='pincode'
                                        onChange={formik.handleChange("pincode")}
                                        onBlur={formik.handleBlur("pincode")}
                                        value={formik.values.pincode}
                                    />
                                    <div className='error'>
                                        {formik.touched.pincode && formik.errors.pincode}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        className='form-control '
                                        placeholder='Mobile No.'
                                        type='text'
                                        name='mobile'
                                        onChange={formik.handleChange("mobile")}
                                        onBlur={formik.handleBlur("mobile")}
                                        value={formik.values.mobile}
                                    />
                                    <div className='error'>
                                        {formik.touched.mobile && formik.errors.mobile}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to="/cart" className='text-dark'>
                                            <IoIosArrowBack className='me-2' /> Return To Cart
                                        </Link>
                                        <button className='button' >Continue to Payment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            {
                                cartState && cartState?.map((item, index) => {
                                    return (
                                        <div key={index} className='d-flex gap-10 mb-3 align-items-center'>
                                            <div className='w-75 d-flex gap-10'>
                                                <div className='w-25 position-relative'>
                                                    <span className='badge bg-secondary text-white rounded-circle p-2 position-absolute' style={{ "top": "-10px", "right": "2px" }}>
                                                        {item?.quantity}
                                                    </span>
                                                    <img
                                                        src={item?.productId?.images[0]?.url ? item?.productId?.images[0]?.url : watch}
                                                        alt='product'
                                                        height={90}
                                                        width={90}
                                                    />
                                                </div>
                                                <div>
                                                    <h5 className='total-price'>
                                                        {item?.productId?.title}
                                                    </h5>
                                                    <p className='total-price'>
                                                        {item?.color?.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex-grow-1 '>
                                                <h5 className='total'> ₹ {item?.quantity * item?.price}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Sub Total</p>
                                <p className='total-price'> ₹ {totalAmount ? totalAmount : 0}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'> ₹ 50</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'> ₹ {totalAmount ? totalAmount + 50 : 0}</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout