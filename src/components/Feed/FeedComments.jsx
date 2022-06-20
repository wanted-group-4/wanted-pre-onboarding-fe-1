import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import FeedAuthor from './FeedAuthor';
import FeedAddCommentBar from './FeedAddCommentBar';

const FeedComments = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = useCallback((newComment) => {
    setCommentList((prev) => [...prev, newComment]);
  }, []);

  return (
    <Container>
      <Wrapper>
        <CommentWrap>
          {commentList.map((comment) => (
            <FeedAuthor
              key={comment.id}
              author={comment.author}
              content={comment.content}
            />
          ))}
        </CommentWrap>
        <FeedAddCommentBar handleAddComment={handleAddComment} />
      </Wrapper>
    </Container>
  );
};

export default React.memo(FeedComments);

const Container = styled.article`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CommentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 15px;
  gap: 5px 0;
  margin-bottom: 10px;
`;
