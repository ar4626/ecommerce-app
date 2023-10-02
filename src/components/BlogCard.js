import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images\blog-1.jpg' className='img-fluid' alt=''/>
            </div>
            <div className='blog-content'>
                <p className='date'>11 JUNE, 2022</p>
                <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                <p className='description'>You are Only As Good as your collection, which is an enormous pressure. I think ther is something about</p>
                <Link to="/" className='button'>
                    Read More 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard