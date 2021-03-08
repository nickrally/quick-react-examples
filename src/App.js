import React, { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  const inc = () => setCounter(counter + 1);
  const dec = () => setCounter(counter - 1)
  return (
    <div className="App">
      <h2>setState hook</h2>
      <p>Counter: {counter}</p>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
}

export default App;
