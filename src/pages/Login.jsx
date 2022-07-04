import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

import { AuthContext } from '../context';
import { isValidRegExp } from '../common/regexp';

const USER_EMAIL = 'tjddufgk@gmail.com';
const USER_PASSWORD = 'Wanted123!';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { handleLogIn } = useContext(AuthContext);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const onChange = (e) => {
    const {
      target: { id, value },
    } = e;

    if (id === 'email') {
      validateEmail(id, value);
    }

    if (id === 'password') {
      validatePassword(id, value);
    }
  };

  const validateEmail = (id, value) => {
    if (isValidEmail === isValidRegExp(id, value)) return;
    setIsValidEmail(isValidRegExp(id, value));
  };

  const validatePassword = (id, value) => {
    if (isValidPassword === isValidRegExp(id, value)) return;
    setIsValidPassword(isValidRegExp(id, value));
  };

  const checkEmail = (email) => {
    if (email === USER_EMAIL) return true;

    alert('이메일을 다시 확인해주세요');
    return false;
  };

  const checkPassword = (password) => {
    if (password === USER_PASSWORD) return true;

    alert('비밀번호를 다시 확인해주세요');
    return false;
  };

  const onSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!checkEmail(email)) return;
    if (!checkPassword(password)) return;

    handleLogIn(email, password);
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Logo>
            <img src={logo} alt="로고" />
          </Logo>
          <Form isValidEmail={isValidEmail} isValidPassword={isValidPassword}>
            <label>
              <input
                id="email"
                type="email"
                ref={emailRef}
                placeholder="전화번호 사용자 이름 또는 이메일"
                onChange={onChange}
              />
            </label>
            <label>
              <input
                id="password"
                type="password"
                ref={passwordRef}
                placeholder="비밀번호 (대문자, 숫자, 특수문자 포함 8자리 이상)"
                onChange={onChange}
              />
            </label>
            <button
              disabled={!(isValidEmail && isValidPassword)}
              onClick={onSubmit}
            >
              로그인
            </button>
          </Form>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 400px;
  background: white;
  border: 1px solid #dbdbdb;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

const Logo = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 40px;
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  gap: 6px 0;
  & label {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    :first-child {
      border: ${(props) =>
        props.isValidEmail ? '1px solid #dbdbdb' : '1px solid red'};
    }
    :nth-child(2) {
      border: ${(props) =>
        props.isValidPassword ? '1px solid #dbdbdb' : '1px solid red'};
    }
  }
  & button {
    width: 100%;
    padding: 10px;
    color: white;
    background: #0095f6;
    border-radius: 5px;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    :disabled {
      opacity: 0.5;
    }
  }
`;
