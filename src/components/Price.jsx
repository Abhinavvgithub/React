import React from 'react'

const Price = (props) => {
    return (
        <>
            <div className="ourprice text-center flex flex-col justify-center items-center mt-9 py-4">
                <h1 className='uppercase text-4xl font-bold'>Our Price</h1>

                <div className="PriceCards flex mt-10 w-[65vw] gap-7">
                    <div className="firstCard">
                        <div className='box py-9 text-2xl uppercase'>First Price</div>
                        <div className=' flex  justify-center'>
                        <div className="money flex flex-col items-center py-7 w-[80%]">
                            <h1><span className='text-2xl font-bold text-[#f6815e]'>$</span><span className='text-2xl font-bold '>500</span>/one month</h1>
                            <p className='my-3 w-[25%] '>Passages of Lorem Ipsum available, but the majority have suffered alteration</p>

                        </div>
                        </div>
                        <button className='text-white px-10 py-3 rounded-4xl uppercase bg-black  text-xl -mt-[15px]'>Join now</button>
                    </div>
                            <div className="firstCard">
                        <div className='box py-9 text-2xl uppercase'>First Price</div>
                        <div className=' flex  justify-center'>
                        <div className="money flex flex-col items-center py-7 w-[80%]">
                            <h1><span className='text-2xl font-bold text-[#f6815e]'>$</span><span className='text-2xl font-bold '>500</span>/one month</h1>
                            <p className='my-3 w-[25%] '>Passages of Lorem Ipsum available, but the majority have suffered alteration</p>

                        </div>
                        </div>
                        <button className='text-white px-10 py-3 rounded-4xl uppercase bg-black  text-xl -mt-[15px]'>Join now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Price