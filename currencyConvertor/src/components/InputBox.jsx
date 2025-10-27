import React from 'react'

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyList = [],
  selectedCurrency = "usd",
}) {
  return (
    <div className="bg-white p-4 rounded-lg">
      <label className="text-gray-600 text-sm block mb-2">
        {label}
      </label>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
      />

      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Input