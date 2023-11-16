import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllBlogs } from '../features/blogs/blogSlice'
import moment from 'moment';



const Blog = () => {
    const blogState = useSelector((state) => state?.blog?.blog)
    console.log(blogState)
    const dispatch = useDispatch();
    useEffect(() => {
        getBlogs();
    }, [])
    const getBlogs = () => {
        const result = dispatch(getAllBlogs());
    }
    return (
        <>
            <Meta title='Blogs' />
            <BreadCrumb title='Blogs' />
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb3'>
                            <h3 className='filter-title'>Find By Category</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>IT</li>
                                    <li>Gaming</li>
                                    <li>Entertainment</li>
                                    <li>Gym</li>
                                    <li>Medicine</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            {
                                Array.isArray(blogState) && blogState?.map((item, index) => {
                                    return (
                                        <div className='col-6 mb-3' key={index}>
                                            <BlogCard 
                                            id = {item?._id}
                                            title = {item?.title}
                                            description = {item?.description}
                                            image = {item?.images[0]?.url}
                                            date={moment(item?.createdAt).format("MMM Do YYYY, h:mm a")}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog