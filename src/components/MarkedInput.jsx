import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  outline: none;
`;

const FormLabel = styled.label`
  font-size: 12px;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.inputLabel};
  color: ${({ theme }) => theme.textColor};
`;

const StyledA = styled.a`
  font-size: 12px;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.inputLabel};
  text-decoration: none;
  margin-left: 3px;
  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
  &:visited {
    color: ${({ theme }) => theme.hoverColor};
  }
`;
const InputTitle = styled.input`
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 24px;
  font-weight: 600;
  margin: 0.25em 0 1em 0;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 75vh;
  margin-top: 0.25em;
  resize: none;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  border: none;
  font-size: 17px;
  padding: 0.75em;
  color: ${({ theme }) => theme.textColor};
`;

const MarkedInput = ({ setMarkdownText, setTitle, title, markdownText }) => {
  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  const onTitleChange = (e) => {
    const newValue = e.currentTarget.value;
    setTitle(newValue);
  };

  return (
    <InputContainer>
      <FormLabel for="title">TITLE</FormLabel>
      <InputTitle type="text" onChange={onTitleChange} value={title} />
      <FormLabel for="entry">
        WRITE YOUR ENTRY HERE USING
        <StyledA
          href="https://www.markdownguide.org/basic-syntax/"
          target="_blank"
        >
          MARKDOWN
        </StyledA>
      </FormLabel>
      <TextArea onChange={onInputChange} value={markdownText} />
    </InputContainer>
  );
};

export default MarkedInput;
