import React from 'react'

const Input = ({text, heading}) => {
  return (
    <div className='flex flex-col'>
      <p className='text-sm text-left mb-2 font-semibold'>{heading}</p>
      <div className='relative'>
        <input className='font-bold border z-2 relative rounded left-0 w-full py-2 pl-2  ' type="number" />
        <span className='absolute right-0 bottom-[0.1px] bg-slate-100 p-2 px-4 rounded-tr rounded-br font-semibold '>{text}</span>
      </div>
    </div>
  )
}

export default Input
