import { useState, useEffect } from "react";
import CurrencyConverter from "./currency-converter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <CurrencyConverter />
    </div>
  );
}

export default App;
