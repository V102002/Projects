import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './components/Input'
import './App.css'

function App() {
  

  return (
    <main>
      <div className='container flex rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-3xl h-fit '>
        <div className="Left-form w-1/2 p-6 flex flex-col items-start">
          <div className='w-full flex justify-between items-start'>
            <h1 className='text-left py-5 font-bold'>
              Mortgage Calculator
            </h1>
            <a className='inline-block px-3 py-1 mt-5 text-sm underline' href="">Clear All</a>
          </div>

          <p className='text-sm text-left font-semibold'>Mortgage Amount</p>

          <div className="relative flex w-full">
            <span className='absolute top-1/7 left-0.3 bg-slate-100 p-2 px-4 font-semibold'>£</span>
            <input className=' font-medium mt-2 border rounded w-full text-sm py-3 px-2 pl-15 z-2' type="number" step="1" />
          </div>

          <div className="term_interest mt-5 w-full flex gap-4">
            <Input text={"years"} heading={"Mortgage Term"}/>
            <Input text={"%"} heading={"Interest Rate"}/>
          </div>

          


        </div>

        <div className='Right-form w-1/2  bg-slate-800 rounded-tr-3xl rounded-br-3xl rounded-bl-[80px]'>
          <h1 className='text-left px-10 pt-10 font-bold text-white'>
            Your results
          </h1>
          <p className='text-sm px-10 py-2 text-left text-slate-400'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click on 'calculate repayments' again</p>
        </div>

      </div>
    </main>
  )
}

export default App
