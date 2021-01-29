import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import Preview from "./Preview";
import { device } from "../devices";
import { BtnLink } from "./createComponents/CreateComponents";

const SingleEntryMain = styled.main`
  @media ${device.mobileL} {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media ${device.laptopL} {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${device.desktop} {
    max-width: 1340px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  font-family: ${({ theme }) => theme.prevTitleFont};
  color: ${({ theme }) => theme.prevTitleColor};
  margin-bottom: 5vh;
`;

const StyledDate = styled.p`
  margin-right: 20px;
  color: ${({ theme }) => theme.prevTextColor};
  font-family: ${({ theme }) => theme.textFont};
  margin-bottom: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: justify;
  width: 100%;
`;

const StyledTag = styled.p`
  margin-right: 20px;
  color: ${({ theme }) => theme.prevTextColor};
  font-family: ${({ theme }) => theme.textFont};
`;

const StyledPreview = styled(Preview)`
  padding: 0;
  text-align: justify;
  & > div {
    padding: 0;
  }
`;

const SingleEntry = ({ journals }) => {
  const { journalId } = useParams();
  const journalArray = Object.entries(journals);
  const [id, journal] = journalArray.find((d) => d[1].path === journalId);

  const tagList = journal.tags.map((tag, i) => (
    <StyledTag key={i}>{tag}</StyledTag>
  ));

  return (
    <SingleEntryMain>
      <StyledTitle>{journal.title}</StyledTitle>
      <StyledDate>{journal.date}</StyledDate>
      {tagList.length > 0 && (
        <TagContainer>
          <StyledTag>tags:</StyledTag>
          {tagList}
        </TagContainer>
      )}
      <StyledPreview markdownText={journal.content} />
      <BtnLink to={`/edit/${journalId}`}>edit</BtnLink>
      <BtnLink to={"/journals"}>back</BtnLink>
    </SingleEntryMain>
  );
};

export default SingleEntry;
