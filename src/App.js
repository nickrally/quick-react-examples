import React, { useState } from 'react';
function App() {
  const [name, setName] = useState(null);
  const todos = [
    'clean bathroom',
    'wash shower curtain',
    'remove stains'
  ]
  const handleChange = (e) => setName(e.target.value);
  return (
    <div className="App">
      <div>
        <label>Name:</label>
        <input type="text" onChange={handleChange} />
        {
          name && <p>Hello, {name}, your todos are:</p>
        }
        <div>
          {todos.map(todo => <li>{todo}</li>)}
        </div>
      </div>
    </div>
  );
}

export default App;
