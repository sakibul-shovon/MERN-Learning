import React from "react";

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="p-2 mt-1 relative">
        <select
        value={currency}
        onChange={(e)=>setCurrency(e.target.value)}
          id={title}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* render favorites
          hr */}
          <hr />

          {currencies?.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>

        <button onClick={()=>handleFavorite(currency)}>⭐</button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
