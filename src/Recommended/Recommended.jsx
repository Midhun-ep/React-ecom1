import React from 'react'
import Button from '../Components/Button'
import "./Recommended.css"
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h1 className='title-rec font-extrabold text-2xl ml-24 md:ml-[22rem]  mb-[20px] mt-[20px] '>Recommended</h1>
        <div data-aos="fade-up"
          data-aos-duration="1000" className='recom-btn flex ml-2 sm:ml-[16rem]'>
          <Button onClickHandler={handleClick} value="" title='All Products' />
          <Button onClickHandler={handleClick} value="Nike" title='Nike' />
          <Button onClickHandler={handleClick} value="Adidas" title='Adidas' />
          <Button onClickHandler={handleClick} value="Puma" title='Puma' />
          <Button onClickHandler={handleClick} value="Vans" title='Vans' />
        </div>
      </div>
    </>
  )
}

export default Recommended