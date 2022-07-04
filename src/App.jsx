import React, { useState, useEffect } from 'react';
import Layout from './components/Layouts/Layout';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

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
      <ThemeProvider theme={theme}>
        <Layout isLoggedIn={isLoggedIn}>
          <Router isLoggedIn={isLoggedIn} />
        </Layout>
      </ThemeProvider>
    )
  );
}

export default App;
