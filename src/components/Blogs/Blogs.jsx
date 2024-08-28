import  { React, useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmarks,handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    
    return (
        <div className='md:w-2/3'>
        <div>
            {
                blogs.map(blog => 
                <Blog
                 handleMarkAsRead = {handleMarkAsRead} 
                 handleAddToBookmarks = {handleAddToBookmarks} 
                 blog ={blog} 
                 key = {blog.id}
                 ></Blog>
                )
            }
        </div>
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;