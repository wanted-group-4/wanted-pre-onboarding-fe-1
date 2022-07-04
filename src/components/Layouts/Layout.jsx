import React, { useContext } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

import { AuthContext } from '../../context';

const Layout = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn && <Navigation />}
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  width: 100vw;
  background: #fafafa;
`;
