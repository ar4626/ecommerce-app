import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import blog from '../images/blog-1.jpg'

const SingleBlog = () => {
    return (
        <>
            <Meta title='Dynamic Blog Name' />
            <BreadCrumb title='Dynamic Blog Name' />

            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to="/blog" className='d-flex align-items-center gap-10'>
                                    <AiOutlineArrowLeft className='fs-4'/>
                                    Go back to Blogs
                                    </Link>
                                <h3 className='title'>A Beautiful Sunday Morning</h3>
                                <img src={blog} alt='blog' className='img-fluid w-100 my-4'/>
                                <p> Good Morning with flowers Flowers are a proud assertion that a ray of beauty outvalues all the utilities of the world The flower fades that is not looked upon Good Morning Wishes A flower does not think of competing with the flower next to it. It just blooms The fairest thing in nature, a flowe </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog