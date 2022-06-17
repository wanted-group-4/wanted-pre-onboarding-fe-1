import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <>
      <Navigation />
      <Container></Container>
    </>
  );
};

export default Home;

const Container = styled.main`
  padding-top: 60px;
  background: #fafafa;
`;
