import React from 'react'

const Input = ({text, heading}) => {
  return (
    <div className='flex flex-col'>
      <p className='text-sm text-left mb-2'>{heading}</p>
      <div className='relative'>
        <input className='border rounded left-2 w-full py-2 pl-2  ' type="number" />
        <span className='absolute right-[1px] bottom-[0.1px] bg-slate-100 p-2 px-4 rounded-tr rounded-br font-semibold z-0 '>{text}</span>
      </div>
    </div>
  )
}

export default Input
