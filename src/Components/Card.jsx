import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

// import './card.css'
const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {

  return (
    <div className='cursor-pointer'>
        <section data-aos="zoom-in-down"  className='card w-[13rem] mr-12 md:w-[13rem]  lg:w-[16rem] mb-[0] m-[10px] lg:m-[20px] rounded-lg border-2 border-solid cursor-pointer p-[20px]'>
          <img className='rotate w-[13rem] sm:w-[10rem] md:w-[10rem] h-[7rem] lg:w-[13rem] mb-[1rem] ' src={img} alt={title} />
          <div className='details'>
            <h2 className='title mb-[1rem]'>{title}</h2>
            <section className='reviews mb-[1rem] flex'>
            <FaStar /> <FaStar /> <FaStar />
            <span className='total-review text-[0.9rem] ml-[10px]'>3</span>
            </section>
            <section className='card-price flex justify-around items-center'>
              <div className="price">
              <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
              <FaShoppingBag />
              </div>
            </section>
              {/* <button className='mt-5 bg-zinc-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer'>Buy Now</button>  */}
              <button onClick={()=>console.log(img,title,star,reviews,prevPrice,newPrice)} className='btn '>Buy Now</button> 
          </div>
        </section>
    </div>
  )
}

export default Card