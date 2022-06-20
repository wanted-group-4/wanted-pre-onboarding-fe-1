import React, { useRef } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import { BsEmojiSmile } from 'react-icons/bs';

const FeedAddCommentBar = ({ handleAddComment }) => {
  const inputRef = useRef();

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onClick = () => {
    const value = inputRef.current.value.trim();
    if (!value) return alert('한 글자이상 입력해주세요.');

    const newComment = {
      id: uuid(),
      author: 'Javascript',
      content: value,
    };

    inputRef.current.value = '';
    handleAddComment(newComment);
  };

  return (
    <Container>
      <Wrapper>
        <SmileWrap>
          <BsEmojiSmile size={20} />
        </SmileWrap>
        <Input
          type="text"
          onKeyPress={onKeyPress}
          ref={inputRef}
          placeholder="댓글 달기..."
        />
        <Button onClick={onClick}>게시</Button>
      </Wrapper>
    </Container>
  );
};

export default FeedAddCommentBar;

const Container = styled.section`
  width: 100%;
  border-top: 1px solid #dbdbdb;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const SmileWrap = styled.div`
  padding: 8px 12px 8px 0;
`;

const Input = styled.input`
  flex-grow: 1;
  width: 100%;
  height: 20px;
  outline: none;
  padding: 0;
`;

const Button = styled.button`
  word-break: keep-all;
  display: inline-block;
  color: #34a6f8;
  background: white;
  font-weight: 700;
  height: 20px;
  font-size: 14px;
  cursor: pointer;
`;
