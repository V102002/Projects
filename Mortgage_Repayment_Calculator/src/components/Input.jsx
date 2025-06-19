import React from 'react';

const Input = ({ text, heading, value, onChange, error }) => {
  return (
    <div className='flex flex-col'>
      <p className='text-sm text-slate-600 text-left mt-3 mb-2 font-semibold'>{heading}</p>
      <div className='relative'>
        <input
          className={`font-bold border z-2 relative rounded left-0 w-full py-2  lg:py-2 pl-3 ${error ? 'border-red-500' : ''}`}
          type='number'
          value={value}
          onChange={onChange}
        />
        <span className='absolute right-0 bottom-0 top-0 pt-2 px-3 text-slate-700 bg-slate-300 lg:p-2 lg:px-4 rounded-tr rounded-br font-semibold '>
          {text}
        </span>
      </div>
      {error && <p className='text-red-500 text-sm mt-1'>This field is required</p>}
    </div>
  );
};

export default Input;
