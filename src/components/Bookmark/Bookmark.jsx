import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className=' mt-2 border-t-2 p-2 bg-white rounded-lg '>
            <h3 className='md:text-bl font-bold text-left'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;