import React from 'react'
import "./Product.css"

// import Card from '../Components/Card';

const Products = ({result}) => {
  return (
    <div>
      <section className='card-container  -mt-[480px] md:-mt-[500px] ml-48  flex flex-wrap justify-center '>
        
        {result}
      </section>


      
      
      
    </div>
  )
}

export default Products