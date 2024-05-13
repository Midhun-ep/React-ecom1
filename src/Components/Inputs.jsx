import React from 'react'

const Inputs = ({handleChange,value,title,name,color}) => {
    return (
        <label className='sidebar-label-container flex'>
            <input onChange={handleChange} type="radio" value={value} name={name} />
            <span className='checkmark text-white' style={{backgroundColor:color}}>{title}</span>
        </label>
    )
}

export default Inputs