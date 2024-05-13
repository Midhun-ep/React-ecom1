import React from 'react'
import Inputs from '../../Components/Inputs'
const Color = ({ handleChange }) => {
    return (
        <>
            <div>
                <h1 className='color-title underline mt-[3px] mb-[2px] font-extrabold md:text-xl text-white md:mb-4'>COLOR</h1>
                <div>
                    <label className='sidebar-label-container flex'>
                        <input onChange={handleChange} type="radio" value="" name="test1" />
                        <span className='checkmark text-white'>All</span>
                    </label>

                    <Inputs
                        handleChange={handleChange}
                        value="blue"
                        title="Blue"
                        name="test1"
                        
                    />

                    <Inputs 
                        handleChange={handleChange}
                        value="red"
                        title="Red"
                        name="test1"
                        
                    />
                     <Inputs
                        handleChange={handleChange}
                        value="green"
                        title="Green"
                        name="test1"
                        
                    />
                     <label className='sidebar-label-container flex'>
                        <input onChange={handleChange} type="radio" value="white" name="test1" />
                        <span className='checkmark text-white' >white</span>
                    </label>


                </div>
            </div></>
    )
}

export default Color