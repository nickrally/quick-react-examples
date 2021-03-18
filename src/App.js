import React, { useState, useEffect } from 'react';
function App() {
  
  const [rates, setRates] = useState({})
  const [base, setBase] = useState('USD')

  const fetchRates = () => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
      .then(res => res.json())
      .then(data => setRates(data.rates))
  }
  useEffect(() => {
    fetchRates(base)
  },[base])
  return (
    <div className="App">
      <div>
        <h4>useEffect hook</h4>
        <h2>{base} Exchange Rates</h2>
        <button onClick={()=>setBase('USD')}>USD</button>
        <button onClick={()=>setBase('EUR')}>EUR</button>
        <ul>
          {
            Object.keys(rates).map(currency => <li>{rates[currency]}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
