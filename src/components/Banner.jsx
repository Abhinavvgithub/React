import React from 'react'

const Banner = (props) => {
    return (
        <>
        <div className='banner'>
            <div className="content ">
                <h1 className='uppercase text-9xl font-bold'>star<span className='text-[#00000059]'>t d</span>ance</h1>
            </div>
        </div>
        <div className='flex justify-center mt-8'>
            <button className='bg-[#fa7f63] text-white px-8 py-3 rounded-4xl uppercase hover:bg-black  '>Read More</button>
        </div>
        </>
    )
}

export default Banner 