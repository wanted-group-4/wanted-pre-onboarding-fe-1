import React from 'react';
import styled from 'styled-components';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiBookmark } from 'react-icons/bi';

import FeedAuthor from './FeedAuthor';

const Feed = ({ feedObj }) => {
  const { image, author, comments, description } = feedObj;

  return (
    <Container>
      <Wrapper>
        <HeaderWrap>
          <Header>
            <FeedAuthor avatar={true} author={author} />
          </Header>
          <DotButton>
            <BiDotsHorizontalRounded size={22} />
          </DotButton>
        </HeaderWrap>
        <ImageWrap>
          <img src={image} alt="피드 사진" />
        </ImageWrap>
        <ContentWrap>
          <FeedIConWrap>
            <LeftICon>
              <AiOutlineHeart size={26} />
              <FaRegCommentDots size={26} />
              <FiSend size={26} />
            </LeftICon>
            <RightICon>
              <BiBookmark size={26} />
            </RightICon>
          </FeedIConWrap>
          <DescriptionWrap>
            <FeedAuthor author={author} content={description} />
          </DescriptionWrap>
        </ContentWrap>
      </Wrapper>
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  width: 100%;
  background: white;
`;

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #dbdbdb;
  height: 60px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: calc(100% - 42px);
`;

const DotButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background: white;
  &svg {
  }
`;

const ImageWrap = styled.div`
  display: block;
  margin-bottom: 10px;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

const FeedIConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LeftICon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
`;

const RightICon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
