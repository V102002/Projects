import { useState } from 'react';
import Input from './components/Input';
import Type from './components/Type';
import calculatorIcon from './assets/images/icon-calculator.svg';
import './index.css';

function App() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [selected, setSelected] = useState('');
  const [total, setTotal] = useState('');
  const [error, setError] = useState({
    amount: false,
    term: false,
    rate: false,
    type: false,
  });

  const handleCalculation = () => {
    const newError = {
      amount: !amount,
      term: !term,
      rate: !rate,
      type: !selected,
    };
    setError(newError);

    if (Object.values(newError).some(Boolean)) return;

    const principal = parseInt(amount);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(term) * 12;

    let monthlyPayment = 0;

    if (selected === 'Repayment') {
      monthlyPayment =
        (principal * interestRate * Math.pow(1 + interestRate, numberOfPayments)) /
        (Math.pow(1 + interestRate, numberOfPayments) - 1);
    } else {
      monthlyPayment = principal * interestRate;
    }

    const totalRepayment = monthlyPayment * numberOfPayments;
    setTotal({
      monthly: monthlyPayment.toFixed(2),
      total: totalRepayment.toFixed(2),
    });
  };

  return (
    <main className='h-screen overflow-auto'>
      <div className='container w-full min-h-screen'>
        <div className="left-form ">
          <div className='flex flex-col gap-1 mt-5 mx-4'>
            <h1 className='font-bold text-xl'>Mortgage Calculator</h1>
            <a className='underline text-[0.8rem] ' href="">Clear All</a>
          </div>

          <div className='amount relative mt-5 mx-4'>
            <p className='relative text-slate-600 text-[0.8rem] mb-2 font-semibold'>Mortgage Amount</p>
            <div className='relative'>
              <span className='absolute rounded-tl rounded-bl z-0 bg-slate-100 p-[0.25rem] px-4 top-1/2 h-full py-2 -translate-y-1/2 left-0 bottom-0 font-semibold'>£</span>
              <input className='border rounded relative z-10 w-full p-2 pl-10 font-semibold' type='number' step='1' value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </div>
          </div>
          {error.amount && <p className='text-red-500 text-sm mt-1'>This field is required</p>}

          <div className="term_interest lg:flex lg:gap-4 mt-5 mx-4">
            <Input heading={'Mortgage Term'} value={term} onChange={(e) => setTerm(e.target.value)}
              error={error.term} text={'years'} />
            <Input heading={'Interest Rate'} value={rate} onChange={(e) => setRate(e.target.value)}
              error={error.rate} text={'%'} />
          </div>

          <div className='mx-4'>
            <p className='text-sm mt-7 mb-2 text-slate-600 font-semibold'>Mortgage Type</p>
            <Type type='Repayment' selected={selected} setSelected={setSelected} error={error.type} />
            <Type type='Interest Only' selected={selected} setSelected={setSelected} error={error.type} />
            {error.type && <p className='text-red-500 text-sm mt-1'>This field is required</p>}
          </div>


          <button
            className='flex mt-5 mx-4 mb-7 gap-2 px-8 font-bold py-3 rounded-full cursor-pointer lg:gap-3'
            style={{ backgroundColor: 'var(--color-lime)' }}
            onClick={handleCalculation}
          >
            <img src={calculatorIcon} alt='Calculator' />
            <p>Calculate Repayments</p>
          </button>
        </div>

        <div className='right_form bg-slate-800 w-full lg:w-1/2 pt-8 pb-6'>
          <div className='mx-4'>
            <h1 className='text-white font-bold mb-3'>Your results</h1>
          <p className='text-sm text-slate-400 mb-6'>Your results are shown below based on the information provided. To adjust the results, edit the form and click "calculate repayments" again</p>
          </div>

          <div className='bg-slate-900 mx-4 mt-4 text-left border-t-[4px] rounded-md' style={{ borderColor: 'var(--color-lime)' }}>
            <p className='text-slate-500 text-sm pt-5 mx-4 mb-3'>Your monthly repayments</p>
            <p className='mx-4 text-4xl font-semibold mb-4 lg:text-6xl' style={{ color: 'var(--color-lime)' }}>£{total?.monthly ?? '0.00'}</p>
            <div className='bg-gray-600 h-px mx-4 mb-5 lg:mb-9' />
            <p className='text-sm mb-2 mx-4 text-slate-500'>Total you'll repay over the term</p>
            <p className='font-bold text-white mx-4 pb-4'>£{total?.total ?? '0.00'}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
