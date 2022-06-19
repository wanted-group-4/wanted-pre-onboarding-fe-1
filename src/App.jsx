import React, { useState, useEffect } from 'react';
import Layout from './components/Layouts/Layout';
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

  return (
    init && (
      <Layout isLoggedIn={isLoggedIn}>
        <Router isLoggedIn={isLoggedIn} />
      </Layout>
    )
  );
}

export default App;
