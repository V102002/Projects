import { useState } from 'react';
import Input from './components/Input';
import Type from './components/Type';
import calculatorIcon from './assets/images/icon-calculator.svg';
import './App.css';

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
    <main>
      <div className='container flex rounded-3xl h-fit md: flex-col w-full'>
        
        {/* LEFT FORM */}
        <div className='Left-form w-1/2 px-10 py-6 flex flex-col items-start md: w-full text-sm'>
          <div className='w-full flex justify-between items-start'>
            <h1 className='text-left py-5 font-bold'>Mortgage Calculator</h1>
            <a
              className='inline-block px-3 py-1 mt-5 text-sm underline cursor-pointer'
              onClick={() => {
                setAmount('');
                setTerm('');
                setRate('');
                setSelected('');
                setTotal('');
                setError({
                  amount: false,
                  term: false,
                  rate: false,
                  type: false,
                });
              }}
            >
              Clear All
            </a>
          </div>

          <p className='text-sm text-left font-semibold'>Mortgage Amount</p>
          <div className='relative flex w-full'>
            <span className='absolute top-1/7 left-0.3 bg-slate-100 p-2 px-4 font-semibold'>£</span>
            <input
              className={`font-bold mt-2 border rounded w-full text-sm py-3 px-2 pl-15 z-2 ${
                error.amount ? 'border-red-500' : ''
              }`}
              type='number'
              step='1'
              min='0'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {error.amount && <p className='text-red-500 text-sm mt-1'>This field is required</p>}

          <div className='term_interest mt-5 w-full flex gap-4'>
            <Input
              text={'years'}
              heading={'Mortgage Term'}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              error={error.term}
            />
            <Input
              text={'%'}
              heading={'Interest Rate'}
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              error={error.rate}
            />
          </div>

          <div className='w-full'>
            <p className='text-sm mt-8 mb-3 font-semibold text-left'>Mortgage Type</p>
            <Type type='Repayment' selected={selected} setSelected={setSelected} error={error.type} />
            <Type type='Interest Only' selected={selected} setSelected={setSelected} error={error.type} />
            {error.type && <p className='text-red-500 text-sm mt-1'>This field is required</p>}
          </div>

          <button
            className='flex mt-3 mb-2 gap-3 px-8 font-bold py-3 rounded-full cursor-pointer'
            style={{ backgroundColor: 'var(--color-lime)' }}
            onClick={handleCalculation}
          >
            <img src={calculatorIcon} alt='Calculator' />
            <p>Calculate Repayments</p>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className='Right-form w-1/2 bg-slate-800 rounded-tr-3xl rounded-br-3xl rounded-bl-[80px] md: w-full text-sm'>
          <h1 className='text-left mx-10 pt-10 font-bold text-white '>Your results</h1>
          <p className='text-sm mx-10 py-2 text-left text-slate-400'>
            Your results are shown below based on the information you provided. To adjust the results, edit the form and click on 'calculate repayments' again.
          </p>

          <div
            className='bg-slate-900 text-left border-t-[4px] mt-8 mx-10 px-4 rounded-md py-2 text-gray-400'
            style={{ borderColor: 'var(--color-lime)' }}
          >
            <p className='mx-5 text-sm mt-5'>Your monthly repayments</p>
            <p className='mx-5 my-5 text-6xl font-semibold' style={{ color: 'var(--color-lime)' }}>
              £{total?.monthly ?? '0.00'}
            </p>
            <div className='bg-gray-600 h-px mx-4 mb-9' />
            <div className='mx-5 mb-8'>
              <p className='text-sm mb-2'>Total you'll repay over the term</p>
              <p className='font-bold text-white'>£{total?.total ?? '0.00'}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
