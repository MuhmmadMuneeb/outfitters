import React from 'react'

const Footer = () => {
  return (

    <section className='min-h-screen bg-white flex flex-col'>

      <div className='w-full flex-1 flex justify-center items-center py-16 px-6'>
        <div className='w-full max-w-md space-y-8 flex flex-col items-center'>
          <p className='text-center text-2xl md:text-3xl font-display text-gray-900'>
            Get the latest trends first
          </p>

          <div className="relative w-full sm:w-80 group">
            <input
              type="text"
              required
              placeholder=" " 
              className="peer w-full border-b-2 border-gray-300 focus:border-black outline-none px-1 py-3 bg-transparent transition-all"
            />
            <label
              className="absolute left-1 top-3 text-gray-400 pointer-events-none transition-all duration-300
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
              peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black
              peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs"
            >
              Enter your email
            </label>
          </div>


          <ul className='flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-600 uppercase tracking-widest'>
            <li className="cursor-pointer hover:text-black">Facebook</li>
            <li className="text-gray-300 hidden sm:block">|</li>
            <li className="cursor-pointer hover:text-black">Instagram</li>
            <li className="text-gray-300 hidden sm:block">|</li>
            <li className="cursor-pointer hover:text-black">Youtube</li>
            <li className="text-gray-300 hidden sm:block">|</li>
            <li className="cursor-pointer hover:text-black">TikTok</li>
            <li className="text-gray-300 hidden sm:block">|</li>
            <li className="cursor-pointer hover:text-black">Pinterest</li>
          </ul>
        </div>
      </div>

      <footer className='bg-black text-gray-500 py-12 px-6 md:px-16'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>

          <ul className='flex flex-col items-center md:items-start space-y-3 text-sm'>
            <li className='cursor-pointer hover:text-white transition'>FAQ'S</li>
            <li className='cursor-pointer hover:text-white transition'>Log in/Sign up</li>
            <li className='cursor-pointer hover:text-white transition'>How to buy</li>
            <li className='cursor-pointer hover:text-white transition'>Payment</li>
            <li className='cursor-pointer hover:text-white transition text-center md:text-left'>Shipping & Deliveries</li>
            <li className='cursor-pointer hover:text-white transition text-center md:text-left'>Exchange & Returns</li>
          </ul>

          <div className="order-first md:order-none">
            <img 
              className='w-32 md:w-40 brightness-0 invert' 
              src="/logo.svg" 
              alt="Outfitters Logo" 
            />
          </div>

          <ul className='flex flex-col items-center md:items-end space-y-3 text-sm'>
            <li className='cursor-pointer hover:text-white transition'>About us</li>
            <li className='cursor-pointer hover:text-white transition'>Retail stores</li>
            <li className='cursor-pointer hover:text-white transition'>Contact us</li>
            <li className='cursor-pointer hover:text-white transition'>Work with us</li>
          </ul>
        </div>

        <div className="border-t border-gray-900 mt-10 pt-6">
            <p className='text-center text-xs uppercase tracking-widest text-gray-600'>
                © Copyrights Reserved by Outfitters
            </p>
        </div>
      </footer>
    </section>
  )
}

export default Footer