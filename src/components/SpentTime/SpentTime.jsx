import React from 'react';

const SpentTime = ({readTime}) => {
    return (
        <div>
            <h4 className=' md:w-[410px] text-center text-[#6047EC] font-bold
             p-4 ml-4 mt-8 mb-2 bg-[#6047EC1A] rounded-lg '>Spent time on read : {readTime} min</h4>
        </div>
    );
};

export default SpentTime;