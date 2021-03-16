import React, { useState, createContext } from 'react';
import Header from './Header';
import Navigation from './Navigation';

export const MyUserContext = createContext();

function App() {
  const [username, setUsername] = useState(null);
  const currentUser = {
    username: username,
    loginFn: (_username) => setUsername(_username),
    logoutFn: () => setUsername(null)
  }
  return (
    <MyUserContext.Provider value={currentUser}>
      <Header />
      <Navigation />
    </MyUserContext.Provider>
  )
}

export default App;
