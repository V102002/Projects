import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './components/Input'
import Type from './components/Type'
import calculatorIcon from './assets/images/icon-calculator.svg';
import './App.css'

function App() {
  
  const [amount,setAmount]=useState('');
  const [selected,setSelected]=useState('');
  return (
    <main>
      <div className='container flex rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-3xl h-fit '>
        <div className="Left-form w-1/2 px-10 py-6 flex flex-col items-start">
          <div className='w-full flex justify-between items-start'>
            <h1 className='text-left py-5 font-bold'>
              Mortgage Calculator
            </h1>
            <a className='inline-block px-3 py-1 mt-5 text-sm underline' href="">Clear All</a>
          </div>

          <p className='text-sm text-left font-semibold'>Mortgage Amount</p>

          <div className="relative flex w-full">
            <span className='absolute top-1/7 left-0.3 bg-slate-100 p-2 px-4 font-semibold'>£</span>
            <input className=' font-bold mt-2 border rounded w-full text-sm py-3 px-2 pl-15 z-2' type="number" step="1" />
          </div>

          <div className="term_interest mt-5 w-full flex gap-4">
            <Input text={"years"} heading={"Mortgage Term"}/>
            <Input text={"%"} heading={"Interest Rate"}/>
          </div>

          <div className='w-full'>
            <p className='text-sm mt-8 mb-3 font-semibold text-left'>Mortgage Type</p>
            <Type type='Repayment' selected={selected} setSelected={setSelected}/>
            <Type type='Interest Only' selected={selected} setSelected={setSelected}/>
          </div>

          <button className='flex mt-3 mb-2 gap-3 px-8 font-bold py-3 rounded-full cursor-pointer' style={{backgroundColor: 'var(--color-lime)'}}>
            <img src={calculatorIcon} alt="Calculator" />
            <p>Calculate Repayments</p>
          </button>

        </div>

{/* ====================================================================================================================================================================== */}
        
        <div className='Right-form w-1/2 bg-slate-800 rounded-tr-3xl rounded-br-3xl rounded-bl-[80px]'>
          <h1 className='text-left mx-10 pt-10 font-bold text-white'>
            Your results
          </h1>
          <p className='text-sm mx-10 py-2 text-left text-slate-400'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click on 'calculate repayments' again</p>

          <div className='bg-slate-900 text-left border-t-[4px]  mt-8 mx-10 px-4 rounded-md py-2 text-gray-400' style={{borderColor:'var(--color-lime)'}}>
            <p className='mx-5 text-sm mt-5'>Your monthly repayments</p>
            <p className='mx-5 my-5 text-6xl font-semibold' style={{color:'var(--color-lime)'}}>£1,797.74</p>
            <div className='bg-gray-600 h-px mx-4 mb-9'/>
            <div className='mx-5 mb-8'>
              <p className='text-sm mb-2'>Total you'll repay over the term</p>
              <p className='font-bold text-white'>£539,322.94</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default App
