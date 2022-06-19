import React from 'react';
import styled from 'styled-components';

const FeedAuthor = ({ avatar, author, content }) => {
  return (
    <Container>
      <Wrapper>
        {avatar && (
          <Avatar>
            <span></span>
          </Avatar>
        )}
        <Author>
          <span>{author}</span>
        </Author>
        {content && (
          <Content>
            <span>{content}</span>
          </Content>
        )}
      </Wrapper>
    </Container>
  );
};

export default FeedAuthor;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  display: flex;
  margin-right: 15px;
  & span {
    background: gray;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const Author = styled.div`
  display: flex;
  & span {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
