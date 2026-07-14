import React from 'react'

const Testimonial = (props) => {
    return (
        <>
            <div className="testimonial mt-10">
               <h1 className='uppercase text-5xl font-bold text-white text-center pt-10'>Testimonial</h1>
                    <div class="container px-5 py-14 mx-auto">
                        <div class="testborder flex items-center w-[70vw] mx-auto  mb-10  sm:flex-row flex-col bg-white">
                            <div class="sm:w-52 sm:h-52 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                               <img src={props.ClientImg} alt="" />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-gray-900 text-2xl title-font font-bold mb-2">Jonyro</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                            </div>
                        </div>
                        <div class=" testborder2 flex items-center w-[70vw] mx-auto  mb-10  sm:flex-row flex-col bg-white">
                            <div class="flex-grow sm:text-right text-center  mt-6 sm:mt-0 pl-4">
                                <h2 class="text-gray-900 text-2xl title-font font-bold mb-2">Jonyro</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                
                            </div>
                            <div class=" sm:order-none order-first sm:w-52 sm:h-52 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                               <img src={props.ClientImg} alt="" />
                            </div>
                        </div>
                        
                    </div>
              
            </div>
        </>
    )
}

export default Testimonial