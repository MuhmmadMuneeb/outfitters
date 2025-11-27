import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate, useParams } from 'react-router-dom';
import { productsContext } from '../context/context';

const Nav = () => {
  const [open, setopen] = useState(false)
  const [rightopen, setRightopen] = useState(false)
  const { allProducts } = useContext(productsContext)
  const { id } = useParams()

  const [search, setsearch] = useState(false)
  const navigate = useNavigate()
  function handleopen() {
    setopen(true)
  }
  function handlenavigate(id) {
    console.log("navigated")
    navigate(`/cart/${id}`)
  }
  function handleRightopen() {
    setRightopen(true)
  }
  function handlesearch() {
    if (search) {
      setsearch(false)
    } else {
      setsearch(true)
    }
  }
  function handleHomeroute() {
    navigate("/home")
  }
  function handleAboutroute() {
    navigate("/products")
  }
  function handleContactroute() {
    navigate("/cart")
  }

  return (

    <section className='fixed left-0 top-0 z-10 w-full'>
      <nav className=' flex items-center justify-between  p-3.5 relative'>
        <div className='flex  justify-around w-[20%]'>
          <GiHamburgerMenu size={30} className='cursor-pointer' onClick={handleopen} />
          <img className='text-black' src="../public/logo.svg" alt="" />
        </div>
        <div className='flex items-center justify-around w-[10%]'>
          <CiSearch onClick={handlesearch} className='cursor-pointer' size={20} />
          <GrUserManager className='cursor-pointer' size={20} />
          <IoBagOutline onClick={handleRightopen} className='cursor-pointer' size={20} />
        </div>
        {/* RIGHT SLIDER */}
        <div className={`h-screen absolute right-0 top-0 shadow-lg w-96 space-y-11 overflow-y-scroll bg-white z-20  ${rightopen === true ? "translate-x-0" : "translate-x-full"} transition-transform ease-in  `}>
          <div className='  '>
            <div className='relative h-10 '>
              <RxCross1 className='cursor-pointer font-medium absolute right-1.5 top-1.5' size={30} onClick={() => setRightopen(false)} />
            </div>
            <div className='space-y-5'>
              <p className='p-5 text-size font-display'>ADDED TO YOUR BASKET</p>
              <p className='text-center text-size font-light'>YOUR BASKET IS CURRENTLY EMPTY</p>
              <button className='text-center w-full text-size font-light bg-black text-white p-3.5 cursor-pointer '>Contniue Shopping</button>
              <p className='text-center text-size font-light '>YOU MAY ALSO LIKE</p>
            </div>

            <div className=' border h-full grid grid-cols-3'>
              {allProducts.map((item) => (
                <div className='h-28 border cursor-pointer' key={item.id}>
                  <img onClick={() => handlenavigate(item.id)} className='object-cover h-full' src={item.images[0]} alt="" />
                </div>
              ))}
            </div>
          </div>


        </div>
      </nav>
      {/* SEARCH BAR */}

      <div className={`flex justify-center items-center gap-9 transition-all duration-500 ease-in-out
  ${search ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <input className=" placeholder:text-black p-2 rounded-2xl w-2xl bg-gray-400 " type="text" placeholder='Search Here' />
        <span className='text-black rounded-2xl  bg-gray-400 px-7 py-2 cursor-pointer'>Search</span>
      </div>
      {/* SLIDER NAV BAR */}
      <div className={`h-screen shadow-lg w-72 space-y-11 bg-white z-20   ${open === true ? "translate-x-0" : "-translate-x-full"} transition-transform ease-in fixed top-0 left-0 `}>
        <div className='flex text-center p-5'>
          <RxCross1 className='cursor-pointer' onClick={() => setopen(false)} />
          <img className='fill-black cursor-pointer' src="../public/logo.svg" alt="" />
        </div>
        <ul className='flex items-center justify-around w-full'>
          <li onClick={handleHomeroute} className='hover:text-blue-400 cursor-pointer'>Home</li>
          <li onClick={handleAboutroute} className='hover:text-blue-400 cursor-pointer'>Products</li>
          <li onClick={handleContactroute} className='hover:text-blue-400 cursor-pointer'>Cart</li>
        </ul>

      </div>
    </section>
  )
}

export default Nav
