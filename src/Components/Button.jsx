import React from 'react'

const Button = ({onClickHandler,value,title}) => {


  
  return (
    <>
    <button onClick={onClickHandler} value={value}  className='rec-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl text-xs md:text-lg md:font-bold'>{title}</button>
    </>
  )
}

export default Button