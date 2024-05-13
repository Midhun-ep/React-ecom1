import React from 'react'
import Inputs from '../../Components/Inputs'
const Price = ({handleChange}) => {
    return (
        <>
            <div className='pr-3'>
                <h1 className='price-title underline md:mb-4 font-extrabold md:text-xl text-white'>PRICE</h1>
                <div>
                <label className='sidebar-label-container flex'>
                        <input onChange={handleChange} type="radio" value="" name="test2" />
                        <span className='checkmark text-white'>All</span>
                    </label>

                    <Inputs 
                    handleChange={handleChange}
                    value={50}
                    title="Rs 0-50"
                    name="test2"
                    />
                    <Inputs 
                    handleChange={handleChange}
                    value={100}
                    title="Rs 50-100"
                    name="test2"
                    />
                    <Inputs 
                    handleChange={handleChange}
                    value={150}
                    title="Rs 100-150"
                    name="test2"
                    />
                    <Inputs 
                    handleChange={handleChange}
                    value={200}
                    title="Over RS 150"
                    name="test2"
                    />
                </div>
            </div>
        </>
    )
}

export default Price