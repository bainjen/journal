import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Rainbow } from "@styled-icons/remix-line";

import { device } from "../devices";

const StyledHeader = styled.header`
  padding: 1em;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100vw;
    padding: 0.75em;
    background-color: ${({ theme }) => theme.navBackground};
  }
`;

const WidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const StyledNav = styled.nav`
  margin: 3px;
  display: flex;
  font-family: ${({ theme }) => theme.navFont};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 0.5em;
`;
const StyledH1 = styled.h1`
  margin: 3px;
  font-family: "Playfair Display", serif;
  color: ${({ theme }) => theme.logoColor};
`;

const StyledRainbow = styled(Rainbow)`
  margin: 5px 6px;
  color: ${({ theme }) => theme.logoColor};
  height: 32px;
  width: 32px;
`;

const StyledLink = styled(Link)`
  margin: 0.75em;
  text-decoration: none;
  color: ${({ theme }) => theme.navLinkColor};
  &.bolded {
    /* font-family: "Playfair Display", serif; */
    font-weight: bold;
    /* font-family: "Open Sans", sans-serif; */
    /* text-decoration: underline; */
    letter-spacing: 1.2px;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }

  @media ${device.tablet} {
    margin: 1em;
  }
`;

const Nav = ({ logout, isLoggedIn }) => {
  return (
    <StyledHeader>
      <WidthContainer>
        <LogoContainer>
          <StyledH1>Dream Catcher</StyledH1>
          <div>
            <StyledRainbow />
          </div>
        </LogoContainer>
        <StyledNav>
          {isLoggedIn ? (
            <>
              <StyledLink to="/login" onClick={logout}>
                logout
              </StyledLink>
              <StyledLink to="/journals">journals</StyledLink>
              <StyledLink className={"bolded"} to="/new">
                new entry
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/login">login</StyledLink>
              <StyledLink to="/register">register</StyledLink>
            </>
          )}
        </StyledNav>
      </WidthContainer>
    </StyledHeader>
  );
};

export default Nav;
