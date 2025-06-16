import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <main>
      <div className='container flex '>
        <div className="Left-form w-1/2 p-6 flex justify-between items-start">
          <h1 className='text-left px-10 py-5 font-medium'>
            Mortgage Calculator
          </h1>
          <a className='inline-block px-3 py-1 mt-4 text-sm underline' href="">Clear All</a>
        </div>

        <div className='Right-form w-1/2  bg-slate-800'>
          <h1 className='text-left px-10 pt-10 font-medium text-white'>
            Your results
          </h1>
          <p className='text-sm px-10 py-2 text-left text-slate-400'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click on 'calculate repayments' again</p>
        </div>

      </div>
    </main>
  )
}

export default App
