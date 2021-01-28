import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import { device } from "../devices";
import styled from "styled-components";
import SingleEntry from "./SingleEntry";

const StyledMain = styled.main`
  padding: 1em;
  width: 100vw;
`;

const WidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4em;
    margin-left: 4em;
  }
  @media ${device.laptop} {
    margin-right: auto;
    margin-left: 5em;
  }

  @media ${device.laptopL} {
    margin-right: auto;
    margin-left: auto;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  border-bottom: 5px solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 5px 5px 10px #f3f3f3, -5px -5px 10px #f3f3f3;
  background-color: ${({ theme }) => theme.cardColor};
  height: 290px;
  width: 270px;
  margin: 0.5em 0 1em 0;
  &:hover {
    height: 273px;
    width: 273px;
    box-shadow: 5px 5px 10px #f1f1f1, -5px -5px 10px #f1f1f1;
  }
  @media ${device.tablet} {
    margin: 2em 0em 2em 2em;
  }
  @media ${device.laptop} {
    margin: 1.5em 0.75em;
  }
`;

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.titleFont};
  margin: 0.5em;
  width: 100%;
  height: 3.5em;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.entryTitleColor};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

const DescriptorText = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme }) => theme.textFont};
  font-weight: 700;
  margin: 0.5em 1em;
`;

const Btn = styled.button`
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.btnBackground};
  border: 2px solid;
  border-color: ${({ theme }) => theme.btnColor};
  height: 30px;
  width: 50px;
  margin: 1.5em 0em 0.25em 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
  /* &:visited { */
`;

const BtnLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.btnColor};
`;

const EntriesIndex = ({ journals }) => {
  let { path, url } = useRouteMatch();

  let allJournals = [];

  for (const [key, d] of Object.entries(journals)) {
    const journal = (
      <Card key={key}>
        <StyledTitle>
          <StyledLink to={`${url}/${d.path}`}>{d.title}</StyledLink>
        </StyledTitle>
        <DescriptorText>{d.date}</DescriptorText>
        <DescriptorText>By: {d.author}</DescriptorText>
        <Btn>
          <BtnLink to={`/edit/${d.path}`}>edit</BtnLink>
        </Btn>
        <Btn>
          <BtnLink to={`${url}/${d.path}`}>read</BtnLink>
        </Btn>
      </Card>
    );

    allJournals.push(journal);
  }

  return (
    <StyledMain>
      <WidthContainer>
        <Switch>
          <Route exact path={path}>
            {allJournals}
          </Route>
          <Route path={`${path}/:journalId`}>
            <SingleEntry journals={journals} />
          </Route>
        </Switch>
      </WidthContainer>
    </StyledMain>
  );
};

export default EntriesIndex;
