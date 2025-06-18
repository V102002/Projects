import React from 'react';

const Input = ({ text, heading, value, onChange, error }) => {
  return (
    <div className='flex flex-col w-full'>
      <p className='text-sm text-left mb-2 font-semibold'>{heading}</p>
      <div className='relative'>
        <input
          className={`font-bold border z-2 relative rounded left-0 w-full py-2 pl-2 ${error ? 'border-red-500' : ''}`}
          type='number'
          value={value}
          onChange={onChange}
        />
        <span className='absolute right-0 bottom-[0.1px] bg-slate-100 p-2 px-4 rounded-tr rounded-br font-semibold '>
          {text}
        </span>
      </div>
      {error && <p className='text-red-500 text-sm mt-1'>This field is required</p>}
    </div>
  );
};

export default Input;
