import React, { useState } from 'react';
import { Buttons } from './Buttons';
import { Box } from './Box';

function App() {
  const [count, setCount] = useState(0);
  const [changeBy, setChangeBy] = useState(1)

  const inc = () => setCount(count + changeBy)
  const dec = () => setCount(count - changeBy)
  return (
    <div className="App">
      <div>
        <h2>Count: {count}</h2>
        <Box setChangeBy={setChangeBy}/>
        <hr/>
        <Buttons changeBy={changeBy} inc={inc} dec={dec}/>
      </div>
    </div>
  );
}

export default App;
