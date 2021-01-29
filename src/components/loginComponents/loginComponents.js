import { Link } from "react-router-dom";
import styled from "styled-components";

import { device } from "../../devices";

export const LoginMain = styled.main`
  width: 100vw;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  @media ${device.tablet} {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 6em;
  }
`;

export const LoginH1 = styled.h1`
  font-family: ${({ theme }) => theme.loginMainFont};
  margin-bottom: 1em;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.textFont};

  & input {
    margin-bottom: 1em;
    width: 290px;
    outline: 1px solid rgba(0, 0, 0, 0.1);
    border: none;
    font-size: 16px;
    padding: 0.25em;
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.textFont};
    letter-spacing: 3px;
    @media ${device.tablet} {
      width: 375px;
    }
  }

  & label {
    font-family: ${({ theme }) => theme.textFont};
    margin-bottom: 3px;
  }
`;

export const BtnInput = styled.input`
  font-family: ${({ theme }) => theme.textFont};
  text-decoration: none;
  color: ${({ theme }) => theme.btnColor};
  appearance: button;
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnBackground};
  border: 2px solid;
  border-color: ${({ theme }) => theme.btnColor};
  height: 30px;
  width: 50px;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  line-height: 25px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.loginHover};
  &:hover {
    font-family: ${({ theme }) => theme.titleFont};
  }
`;

export const BottomLink = styled(Link)`
  font-family: ${({ theme }) => theme.loginMainFont};
  color: ${({ theme }) => theme.btnColor};
  text-decoration: none;
  letter-spacing: 1.5px;
  margin: 3px;
  & p {
    font-size: 13px;
    @media ${device.tablet} {
      font-size: 16px;
    }
  }
`;
