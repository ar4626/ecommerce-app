import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { services } from '../utils/Data'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import { getAllBlogs } from '../features/blogs/blogSlice'
import { addToWishlist, getAllProducts } from '../features/products/productSlice'
import watch1 from "../images/watch-11.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog)
  const productState = useSelector((state) => state?.product?.product)
  // console.log(blogState)

  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    getBlogs();
    getProducts();
  }, [])
  const getBlogs = () => {
    dispatch(getAllBlogs());
  }
  const getProducts = () => {
    dispatch(getAllProducts());
  }
  const addToTheWishlist = (id) => {
    // alert(id)
    dispatch(addToWishlist(id))
}
  return (
    <>
      <Meta title='E-Commerce App' />
      <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img
                src='images\main-banner-1.jpg'
                className='img-fluid rounded-3'
                alt=''
              />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 ir $$41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative '>
                <img
                  src='images\catbanner-01.jpg'
                  className='img-fluid rounded-3'
                  alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 0r <br /> $64.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img
                  src='images\catbanner-02.jpg'
                  className='img-fluid rounded-3'
                  alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest brand <br /> styles and colors</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img
                  src='images\catbanner-03.jpg'
                  className='img-fluid rounded-3'
                  alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $99.00 or <br /> $49.91/mo for 12mo.*</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img
                  src='images\catbanner-04.jpg'
                  className='img-fluid rounded-3'
                  alt=''
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & <br /> ultra-low distortion </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15'>
                      <img src={i.image} alt='services' />
                      <div>
                        <h6>
                          {i.title}
                        </h6>
                        <p className='mb-0'>
                          {i.tagline}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\camera.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\camera.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\tv.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\headphone.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\camera.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\camera.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\tv.jpg' alt='camera' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src='images\headphone.jpg' alt='camera' />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12 '>
            <h3 className='section-heading'>
              Featured Clollection
            </h3>
          </div>
          <div className='row '>
          {
            productState && productState.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div
                  key={index}
                    className="col-2"
                  >
                    <div
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
                        <p className='price'>${item?.price}</p>
                      </div>
                      <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                          <button className='border-0 bg-transparent'>
                            <img src={prodcompare} alt='compare' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img onClick={()=>navigate(`/product/${item?._id}`)} src={view} alt='view' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img src={addcart} alt='addcart' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
          </div>
        </div>
      </Container>
      <Container class1="famous-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images\famous-1.png' className='img-fluid' alt='' />
              <div className='famous-content position-absolute text-white'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.* </p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images\famous-2.png' className='img-fluid' alt='' />
              <div className='famous-content position-absolute'>
                <h5>Studio Display</h5>
                <h6>600 nits of Brightness. </h6>
                <p>27-inch 5K Retina Display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images\famous-3.png' className='img-fluid' alt='' />
              <div className='famous-content position-absolute'>
                <h5>Smart Phones</h5>
                <h6>IPhone 13 Pro. </h6>
                <p>Now in Green. From &999.00 or $41.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images\famous-4.png' className='img-fluid' alt='' />
              <div className='famous-content position-absolute'>
                <h5>Home Speakers</h5>
                <h6>Room-filling Sound. </h6>
                <p>From $699 or $116.588/mo. for 12 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12 '>
            <h3 className='section-heading'>
              Special Products
            </h3>
          </div>
        </div>
        <div className='row'>
          {
            productState && productState.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    brand={item?.brand}
                    price={item?.price}
                    quantity={item?.quantity}
                    rating={item?.totalratings}
                    sold={item?.sold}
                    image={item?.images[0]?.url}
                  />
                )
              }
            })
          }
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12 '>
            <h3 className='section-heading'>
              Our Popular Products
            </h3>
          </div>
        </div>
        <div className='row'>
          {
            productState && productState.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div
                  key={index}
                    className="col-3"
                  >
                    <div
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
                        <p className='price'>${item?.price}</p>
                      </div>
                      <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                          <button className='border-0 bg-transparent'>
                            <img src={prodcompare} alt='compare' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img onClick={()=>navigate(`/product/${item?._id}`)} src={view} alt='view' />
                          </button>
                          <button className='border-0 bg-transparent'>
                            <img src={addcart} alt='addcart' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </Container >
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images\brand-01.png' alt='brand Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images\brand-02.png' alt='brand Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images\brand-03.png' alt='brand Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images\brand-04.png' alt='brand Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images\brand-05.png' alt='brand Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images\brand-06.png' alt='brand Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images\brand-07.png' alt='brand Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images\brand-08.png' alt='brand Logo' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className='col-12 '>
          <h3 className='section-heading'>
            Our Latest Blogs
          </h3>
        </div>
        <div className='row'>
          {
            Array.isArray(blogState) && blogState?.map((item, index) => {
              if (index < 3) {
                return (
                  <div className='col-3 ' key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format("MMM Do YYYY, h:mm a")}
                    />
                  </div>
                )
              }
            })
          }
        </div>
      </Container>
    </>
  )
}

export default Home