import React, { useState, useEffect } from 'react';
import Router from './Router';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
    setInit(true);
  }, []);

  return init && <Router isLoggedIn={isLoggedIn} />;
}

export default App;
