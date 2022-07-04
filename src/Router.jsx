import React, { useContext } from 'react';
import { AuthContext } from './context';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const Router = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
