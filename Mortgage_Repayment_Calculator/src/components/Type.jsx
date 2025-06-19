import React, { useState } from 'react'

const Type = ({type,selected,setSelected}) => {
  return (
    <div>
        <label className={`flex items-center px-2 py-2.5 mb-2 border rounded cursor-pointer 
          ${selected === type ? 'bg-yellow-100 border-yellow-400' : 'border-gray-300'}`}>
          <input type="radio"
         value={type}
         className='mx-3 scale-125 accent-yellow-200'
         checked={selected === type}
         onChange={()=>setSelected(type)}
         />
          <span className='font-semibold'>{type}</span>
        </label>
        
         
    </div>
  )
}

export default Type
