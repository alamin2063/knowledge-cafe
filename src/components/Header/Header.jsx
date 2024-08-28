import React from 'react';
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;