import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Color/Color'
import "./Sidebar.css"
const SideBar = ({handleChange}) => {
  return (
    <>
    <div>
    

    <div  className='SideBar  justify-evenly p-5 pr-4 mt-6 ml-3 md:mt-3 md:ml-10 '>
        
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
        
    </div>
    </div>
    </>
  )
}

export default SideBar