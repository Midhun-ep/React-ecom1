import React from 'react'
import Inputs from '../../Components/Inputs'
const Category = ({ handleChange }) => {
    return (
        <>
            <div className='pr-4'>
                <h1 className='sidebar-title underline  md:mb-4 font-extrabold md:text-xl text-white'>CATEGORY</h1>
                <div>
                    <label className='sidebar-label-container flex'>
                        <input onChange={handleChange} type="radio" value="" name="test" />
                        <span className='checkmark text-white'>All</span>
                    </label>

                    <Inputs handleChange={handleChange}
                        value="sneakers"
                        title="Sneakers"
                        name="test"
                    />

                    <Inputs handleChange={handleChange}
                        value="flats"
                        title="Flats"
                        name="test"
                    />

                    <Inputs handleChange={handleChange}
                        value="sandals"
                        title="Sandals"
                        name="test"
                    />

                    <Inputs handleChange={handleChange}
                        value="heels"
                        title="Heels"
                        name="test"
                    />

                </div>
            </div>
        </>
    )
}

export default Category