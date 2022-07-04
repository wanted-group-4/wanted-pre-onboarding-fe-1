import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context';
import { AiOutlineHeart, AiOutlinePlusSquare } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const Navigation = () => {
  const { handleLogOut } = useContext(AuthContext);

  return (
    <Container>
      <Wrapper>
        <LogoWrap>
          <Link to="/">
            <img src={logo} alt="로고" />
          </Link>
        </LogoWrap>
        <SearchBarWrap>
          <input type="text" placeholder="검색" />
        </SearchBarWrap>
        <IConWrap>
          <ICon>
            <AiOutlinePlusSquare size={22} />
          </ICon>
          <ICon>
            <FiSend size={22} />
          </ICon>
          <ICon>
            <AiOutlineHeart size={22} />
          </ICon>
          <ICon onClick={handleLogOut}>
            <RiLogoutBoxRLine size={22} />
          </ICon>
        </IConWrap>
      </Wrapper>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-bottom: 1px solid #dbdbdb;
`;

const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.max.mobile} {
    justify-content: space-between;
  }

  width: 100%;
  height: 60px;
  max-width: 975px;
  display: flex;
  align-items: center;
  padding: 12px 40px;
`;

const LogoWrap = styled.div`
  @media (max-width: 767px) {
    width: 50%;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33.3%;
  & img {
    display: block;
    margin-top: 7px;
    width: 103px;
    height: 29px;
    object-fit: contain;
  }
`;

const SearchBarWrap = styled.div`
  @media ${({ theme }) => theme.device.max.mobile} {
    display: none;
  }

  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: center;
  & input {
    width: 100%;
    height: 36px;
    padding: 0 16px;
    background: #efefef;
  }
`;

const IConWrap = styled.div`
  @media ${({ theme }) => theme.device.max.mobile} {
    width: 50%;
  }
  width: 33.3%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 15px;
`;

const ICon = styled.div`
  :last-child {
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;
