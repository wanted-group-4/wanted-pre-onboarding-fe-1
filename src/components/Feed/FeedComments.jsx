import React from 'react';
import styled from 'styled-components';
import FeedAuthor from './FeedAuthor';

const FeedComments = ({ comments }) => {
  return (
    <Container>
      <Wrapper>
        {comments.map((comment) => (
          <CommentWrap key={comment.id}>
            <FeedAuthor author={comment.author} content={comment.content} />
          </CommentWrap>
        ))}
      </Wrapper>
    </Container>
  );
};

export default FeedComments;

const Container = styled.article`
  width: 100%;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
const CommentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Author = styled.div`
  & span {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Content = styled.span`
  margin-left: 15px;
`;
