import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { IoBagOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../context/Context"; // ✅ CASE FIX

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
            className="w-28 cursor-pointer mix-blend-difference"
            onClick={() => navigate("/home")}
          />
        </div>


        <ul className="hidden md:flex gap-8">
          <li onClick={() => navigate("/home")} className="cursor-pointer">Home</li>
          <li onClick={() => navigate("/products")} className="cursor-pointer">Products</li>
          <li onClick={() => navigate("/cart")} className="cursor-pointer">Cart</li>
        </ul>

        <div className="flex items-center gap-4">
          <CiSearch onClick={() => setsearch(!search)} className="cursor-pointer" />
          <IoBagOutline onClick={() => setRightopen(true)} className="cursor-pointer" />
        </div>
      </nav>

      {/* SEARCH */}
      <div className={`${search ? "block" : "hidden"} p-4`}>
        <input className="w-full border p-2" placeholder="Search..." />
      </div>

      {/* LEFT MENU */}
      <div className={`fixed top-0 left-0 h-screen bg-white w-full sm:w-72 
        ${open ? "translate-x-0" : "-translate-x-full"} transition`}>
        
        <div className="flex justify-between p-4">
          <img src="/logo.svg" className="w-24" />
          <RxCross1 onClick={() => setopen(false)} />
        </div>

        <ul className="flex flex-col gap-5 text-center">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/products")}>Products</li>
          <li onClick={() => navigate("/cart")}>Cart</li>
        </ul>
      </div>

      {/* CART DRAWER */}
      <div className={`fixed top-0 right-0 h-screen bg-white w-full sm:w-96 
        ${rightopen ? "translate-x-0" : "translate-x-full"} transition`}>

        <div className="p-4 flex justify-end">
          <RxCross1 onClick={() => setRightopen(false)} />
        </div>

        <div className="grid grid-cols-2 gap-2 p-3">
          {allProducts?.map((item) => ( // ✅ SAFE
            <img
              key={item.id}
              src={item.images?.[0]} // ✅ SAFE
              onClick={() => navigate(`/cart/${item.id}`)}
              className="h-28 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nav;