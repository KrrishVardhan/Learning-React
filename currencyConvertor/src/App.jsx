import { useState } from 'react'
import Input from './components/InputBox'
import useCurrencyConvertor from './hooks/useCurrencyConvertor'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyConvertor(from)
  const options = Object.keys(currencyInfo || {})
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="min-h-screen bg-slate-700 flex items-center justify-center">
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}
        className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-md w-full space-y-4"
      >
        <Input
          label="From"
          amount={amount}
          currencyList={options}
          onCurrencyChange={(currency) => {
            setFrom(currency)
          }}
          selectedCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <button
          type="button"
          onClick={swap}
          className="w-full bg-slate-600 text-white py-2 rounded hover:bg-slate-500"
        >
          Swap
        </button>
        <Input
          label="To"
          amount={convertedAmount}
          currencyList={options}
          onCurrencyChange={(currency) => {
            setTo(currency)
          }}
          selectedCurrency={to}
          />
        <button 
          type='submit'
          className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-950"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  )
}

export default App