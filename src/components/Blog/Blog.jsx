import { FaBeer, } from 'react-icons/fa';
import { BsBookmarks } from "react-icons/bs";
import PropTypes from 'prop-types';

const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    console.log(blog);
    const {title,author,author_img,cover,posted_date,hashtags,reading_time} = blog;
    return (
        <div className="flex flex-col gap-2 justify-start border-b-2 pb-4 ">
            <div className="mt-8">
            <img className="rounded-lg w-full" src={cover} alt="cover" />
            </div>

            <div className="flex flex-row mt-2 justify-between ">
                <div className='flex flex-row gap-3'>
                <img className="rounded-full w-10" src={author_img} alt="author img" />
                <div className="flex flex-col justify-start text-left">
                    <h5 className='text-sm'>{author}</h5>
                    <p className='text-sm text-start'>{posted_date}</p>
                </div>
                </div>
                <div className='flex items-center gap-2'>
                <span className="">{reading_time} min read  </span>
                <button onClick={()=>handleAddToBookmarks(blog)}> <BsBookmarks></BsBookmarks> </button>
                </div>
            </div>

            <h1 className="md:text-4xl font-bold text-left ">{title}</h1>
            <div className="text-left flex gap-2">
                {
                    hashtags.map(hashtag => <p>
                        <span > {hashtag} </span>
                    </p>)
                }
            </div>
            <button className='text-left text-blue-700 underline' onClick={()=>handleMarkAsRead(blog)} >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;

