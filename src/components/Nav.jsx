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
  margin: 5px;
  display: flex;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const StyledH1 = styled.h1`
  margin: 5px;
  font-family: "Playfair Display", serif;
  color: ${({ theme }) => theme.logoColor};
`;

const StyledRainbow = styled(Rainbow)`
  margin: 8px;
  color: ${({ theme }) => theme.logoColor};
  height: 32px;
  width: 32px;
`;

const StyledLink = styled(Link)`
  margin: 1em;
  text-decoration: none;
  color: ${({ theme }) => theme.navLinkColor};

  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme.salmon};
  }
  &:link {
  }
  &:active {
  }
  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

const Nav = () => {
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
          <StyledLink to="/logout">logout</StyledLink>

          <StyledLink to="/journals">journals</StyledLink>

          <StyledLink to="/new">new entry</StyledLink>
        </StyledNav>
      </WidthContainer>
    </StyledHeader>
  );
};

export default Nav;
