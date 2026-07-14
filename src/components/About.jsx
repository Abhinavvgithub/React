import React from 'react'

const About = (props) => {
    return (
        <>
            <div className="about text-center">
                <div className="About_content text-center">
                    <h1 className='uppercase  text-4xl font-bold mb-3'>{props.AboutHeading}</h1>
                    <p className="text-[14px]">English. Many desktop publishing</p>
                    <p className="text-[14px]">packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                </div>
                <div className="aboutimg flex justify-center">
                    <img src={props.AboutImg} alt="Danceimg" />
                </div>
                <div className="Aboutpara text-center flex justify-center">
                    <p className="text-[14px] w-[70%] mb-4">using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    
                </div>
                <button className='text-white px-8 py-3 rounded-4xl uppercase bg-black my-3  '>Read More</button> 
            </div>
        </>
    )
}

export default About