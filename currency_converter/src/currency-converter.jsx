import React, { useEffect, useLayoutEffect, useState } from "react";
import CurrencyDropdown from "./dropdown";

function CurrencyConverter() {
  {
    /* curl -s https://api.frankfurter.dev/v1/currencies  */
  }
  {
    /* https://api.frankfurter.app/latest?amount=1&from=USD&to=INR */
  }
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);
  console.log(currencies);

  const convertCurrency = () => {
    console.log("dfssdf");
  };

  const handleFavorite = (currency) => {
    //add to fav
  };
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Currency Converter
      </h2>
      <div>
        <CurrencyDropdown
          currencies={currencies}
          title="From"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          handleFavorite={handleFavorite}
        />
        {/* swapCurrency */}
        <div>
          <button>🔁</button>
        </div>
        <CurrencyDropdown
          currencies={currencies}
          title="To"
          currency={toCurrency}
          setCurrency={setToCurrency}
          handleFavorite={handleFavorite}
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium">
          Amount :
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Convert
        </button>
      </div>

      <div className=" mt-4 text-lg font-medium text-right text-green-600 ">
        Converted Amount : 22 USD
      </div>
    </div>
  );
}

export default CurrencyConverter;
