import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


const BlogCard = (props) => {
    const { id, title, description,image, date } = props;
    const dispatch = useDispatch();

    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src={image} className='img-fluid w-100' alt='' />
            </div>
            <div className='blog-content'>
                <p className='date'>{date}</p>
                <h5 className='title'>{title}</h5>
                <p className='description' dangerouslySetInnerHTML={{ __html:description?.substr(0,20) + ".........." }}></p>
                <Link to={`/blog/ ₹{id}`} className='button'>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogCard