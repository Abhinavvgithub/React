import React from 'react'

const Navbar = (props) => {
  return (
    <div>
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src={props.Image} alt="" />
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center uppercase text-[18px]">
        <a className="mr-5 hover:text-[#fa7e65]">Home</a>
        <a className="mr-5 hover:text-[#fa7e65]">About</a>
        <a className="mr-5 hover:text-[#fa7e65]">Services</a>
        <a className="mr-5 hover:text-[#fa7e65]">Client</a>
        <a className="mr-5 hover:text-[#fa7e65]">Contact US</a>
      </nav>
      <button className="inline-flex items-center bg-[#fa7e65] rounded-4xl py-3 px-8 focus:outline-none hover:text-black text-white mt-4 md:mt-0">Call
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </button>
    </div>
  </header>
</div>

  )
}

export default Navbar