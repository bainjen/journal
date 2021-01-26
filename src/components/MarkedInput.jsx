import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
`;

const InputTitle = styled.input`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 65vh;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
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
      <InputTitle type="text" onChange={onTitleChange} value={title} />
      <TextArea onChange={onInputChange} value={markdownText} />
    </InputContainer>
  );
};

export default MarkedInput;
