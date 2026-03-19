import React from 'react';

const P2 = ({author,download_url,height,width,url}) => {

    return (
        <a href={url} target='blank' className='bg-blue-900 rounded-2xl p-2 h-full space-y-2 w-60'>
            <h1 className='text-xl font-bold text-center'>{author}</h1>
            <img className='rounded-2xl h-40 w-full object-cover' src={download_url} alt="" />
            <p className='font-semibold'>Height : {height}</p>
            <p className='font-semibold'>Width : {width}</p>
        </a>
    );
};

export default P2;