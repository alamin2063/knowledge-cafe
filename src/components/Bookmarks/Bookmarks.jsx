import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks}) => {

    return (
        <div className=' md:w-[410px] p-4 ml-4 mt-4 bg-[#1111110D] rounded-lg '>
            <h3 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h3>
            <div>
                {
                    bookmarks.map( bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf.isRequired
}
export default Bookmarks;