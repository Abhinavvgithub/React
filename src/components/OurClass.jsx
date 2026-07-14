import React from 'react'

const OurClass = (props) => {
    return (
        <div className="classes ">
            <h1 className='text-center uppercase text-4xl font-bold'>{props.ClassHeading}</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="class_cardimg inline-flex items-center justify-center rounded-full bg-[#252525] mb-5 h-[220px]  w-[220px] overflow-hidden ">
                                <img src={props.DanceImg} alt="mendance" className=" object-contain"/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-2xl title-font font-bold mb-3 uppercase my-4">Hip Hop Dance</h2>
                                <button className='text-white px-8 py-3 rounded-4xl uppercase bg-black mt-3 '>Read More</button> 
                            </div>
                        </div>
                       <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="class_cardimg inline-flex items-center justify-center rounded-full bg-[#252525] mb-5 h-[320px]  w-[320px] overflow-hidden ">
                                <img src={props.DanceImg2} alt="mendance" className=" object-contain"/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-2xl title-font font-bold mb-3 uppercase my-4">Hip Hop Dance</h2>
                                <button className='text-white px-8 py-3 rounded-4xl uppercase bg-black mt-3 '>Read More</button> 
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                            <div className="class_cardimg inline-flex items-center justify-center rounded-full bg-[#252525] mb-5 h-[220px]  w-[220px] overflow-hidden ">
                                <img src={props.DanceImg} alt="mendance" className=" object-contain"/>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-2xl title-font font-bold mb-3 uppercase my-4">Hip Hop Dance</h2>
                                <button className='text-white px-8 py-3 rounded-4xl uppercase bg-black mt-3 '>Read More</button> 
                            </div>
                        </div>
                    </div>
                  
                </div>
            </section>

        </div>
    )
}

export default OurClass