import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import './Nav.css'
const Nav = ({ handleInputChange, query, handleLoginPopup }) => {
    return (
        <>


            <nav className='nav flex justify-evenly bg-blue-600  border-b-2 border-b-slate-200 p-6 '>
                <div className=''>
                <h1 data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='navh1 ml-2 pr-1 md:text-2xl font-extrabold'>SHOPIFY
                </h1>
                </div>

                <div data-aos="zoom-out" className='nav-input  relative'>
                    <input className='input m-0 pl-8 pt-1 md:pt-1 w-[12rem] md:w-[15rem] h-[1.6rem] md:h-[2rem] ' type="text" onChange={handleInputChange} value={query} placeholder='Search' />
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <IoMdSearch className="text-gray-400" />
                    </span>
                </div>
                
                <div className='Nav-Profile  flex pt-1 pl-2 '>
                    <div  className='hidden md:block'>
                       <ul className='flex gap-4 text-lg font-bold text-white'>
                           <li><a href="">Home</a></li>
                           <li><a href="#about">About</a></li>
                           <li><a href="#order">Order</a></li>
                           <li><a href="#help">Help</a></li>
                       </ul>
                    </div>
                    <a className='Nav-ico md:w-7 h-6 sm:ml-56 lg:ml-10 mt-1 ' href="">
                        <FaRegHeart style={{ color: 'white' }} />
                    </a>
                    <a className='Nav-ico  md:w-7 h-6 mt-1' href="">
                        <FiShoppingCart style={{ color: 'white' }} />
                    </a>


                    <MdOutlinePersonAddAlt1 className='mt-1' onClick={handleLoginPopup} style={{ color: 'white' }} />

                </div> 
            </nav>

        </>

    )
}

export default Nav