import React from 'react'

const Footer = () => {
  return (
    <section className='h-screen'>
      <div className='w-full h-1/2 flex justify-center items-center'>
        <div className='h-52 space-y-3.5'>
          <p className='text-center text-2xl font-display'>Get the latest trends first</p>
          {/* <input className='border-b-2 focus:outline-none w-full text-center' type="email" placeholder='Enter your email' /> */}
          <div className="relative w-72">
            <input
              type="text"
              required
              className="
          peer w-full border-b-2 border-gray-400 
          focus:border-black outline-none px-2 py-2 bg-transparent
        "
            />

            <label
              className="
          absolute left-2 top-2 text-gray-500 pointer-events-none
          transition-all duration-300
          peer-focus:-top-2 peer-focus:text-sm peer-focus:text-black
          peer-valid:-top-2 peer-valid:text-sm text-center w-full
        "
            >
              Enter your email
            </label>
          </div>
          <ul className='flex justify-center items-center gap-3.5'>
            <li>Facbook | </li>
            <li>Instagram | </li>
            <li>Youtube | </li>
            <li>Tik Tok | </li>
            <li>Pinsert  </li>
          </ul>
        </div>
      </div>
      <footer className='bg-black  text-gray-500 h-1/2  p-10'>

        <div className='flex justify-between items-center h-full'>
          <ul className=''>
            <li className='cursor-pointer hover:text-white transition'>FAQ'S</li>
            <li className='cursor-pointer hover:text-white transition'>Log in/Sign up</li>
            <li className='cursor-pointer hover:text-white transition'>How to buy</li>
            <li className='cursor-pointer hover:text-white transition'>Payment</li>
            <li className='cursor-pointer hover:text-white transition'>Shipping & Deliveries</li>
            <li className='cursor-pointer hover:text-white transition'>Exchange & Returns</li>
          </ul>
          <div>
            <img className='text-black' src="../public/logo.svg" alt="" />
          </div>
          <ul>
            <li className='cursor-pointer hover:text-white transition'>About us</li>
            <li className='cursor-pointer hover:text-white transition'>Retail stores</li>
            <li className='cursor-pointer hover:text-white transition'>Contact us</li>
            <li className='cursor-pointer hover:text-white transition'>Work with us</li>
          </ul>
        </div>
        <p className='text-center text-gray-500'>@copyrights reserved by outfitters</p>
      </footer>
    </section>
  )
}

export default Footer
