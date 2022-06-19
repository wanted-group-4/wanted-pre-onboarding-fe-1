import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Feed from '../components/Feed/Feed';

const Home = () => {
  const [feedsObj, setFeedsObj] = useState();

  const fetchFeeds = useCallback(async () => {
    try {
      const {
        data: { feeds },
      } = await axios.get('data/feeds.json');
      setFeedsObj(feeds);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchFeeds();
  }, [fetchFeeds]);

  return (
    <>
      <Container>
        <Wrapper>
          <FeedsWrap>
            {feedsObj &&
              feedsObj.map((feedObj) => (
                <Feed key={feedObj.id} feedObj={feedObj} />
              ))}
          </FeedsWrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 100px 0;
  background: #fafafa;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FeedsWrap = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }
  gap: 20px 0;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
