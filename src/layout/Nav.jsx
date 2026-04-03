import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../context/context";

const Nav = () => {
  const [open, setopen] = useState(false);
  const [rightopen, setRightopen] = useState(false);
  const [search, setsearch] = useState(false);
  const { allProducts } = useContext(productsContext);
  const navigate = useNavigate();
  return (
    <section className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <GiHamburgerMenu
            size={26}
            className="cursor-pointer md:hidden"
            onClick={() => setopen(true)}
          />
          <img
            src="/logo.svg"
            alt="logo"
            className="w-28 cursor-pointer"
            onClick={() => navigate("/home")}
          />
        </div>
        <ul className="hidden md:flex gap-8 font-medium">
          <li onClick={() => navigate("/home")} className="cursor-pointer hover:text-blue-500">Home</li>
          <li onClick={() => navigate("/products")} className="cursor-pointer hover:text-blue-500">Products</li>
          <li onClick={() => navigate("/cart")} className="cursor-pointer hover:text-blue-500">Cart</li>
        </ul>

    
        <div className="flex items-center gap-4">
          <CiSearch
            size={22}
            className="cursor-pointer"
            onClick={() => setsearch(!search)}
          />
          <GrUserManager size={22} className="cursor-pointer hidden sm:block" />
          <IoBagOutline
            size={22}
            className="cursor-pointer"
            onClick={() => setRightopen(true)}
          />
        </div>
      </nav>

      <div
        className={`flex justify-center items-center gap-3 px-4 transition-all duration-500
        ${search ? "max-h-20 py-3 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <input
          className="w-full max-w-xl p-2 rounded-full bg-gray-200 outline-none"
          type="text"
          placeholder="Search Here"
        />
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Search
        </button>
      </div>


      <div
        className={`fixed top-0 left-0 h-screen bg-white w-full sm:w-72 shadow-lg z-50
        ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4">
          <img src="/logo.svg" className="w-24" />
          <RxCross1 onClick={() => setopen(false)} className="cursor-pointer" />
        </div>

        <ul className="flex flex-col gap-6 text-center mt-10 font-medium">
          <li onClick={() => navigate("/home")} className="cursor-pointer">Home</li>
          <li onClick={() => navigate("/products")} className="cursor-pointer">Products</li>
          <li onClick={() => navigate("/cart")} className="cursor-pointer">Cart</li>
        </ul>
      </div>


      <div
        className={`fixed top-0 right-0 h-screen bg-white w-full sm:w-96 shadow-lg z-50 overflow-y-auto
        ${rightopen ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300`}
      >
        <div className="p-4 flex justify-end">
          <RxCross1 onClick={() => setRightopen(false)} className="cursor-pointer" />
        </div>

        <div className="text-center space-y-4 px-4">
          <p className="font-semibold">ADDED TO YOUR BASKET</p>
          <p className="text-gray-500">YOUR BASKET IS CURRENTLY EMPTY</p>

          <button className="w-full bg-black text-white py-3">
            Continue Shopping
          </button>

          <p className="text-gray-600">YOU MAY ALSO LIKE</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3">
          {allProducts.map((item) => (
            <div key={item.id} className="h-28 cursor-pointer">
              <img
                onClick={() => navigate(`/cart/${item.id}`)}
                className="object-cover w-full h-full rounded"
                src={item.images?.[0]}
                alt="product"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nav;