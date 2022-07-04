import React from 'react';
import Layout from './components/Layouts/Layout';
import Router from './Router';
import theme from './styles/theme';
import { AuthProvider } from './context';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
